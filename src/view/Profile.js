import { doc, getDoc, updateDoc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from "firebase/storage";
import React, { useEffect, useState } from "react";
import { auth, db, storage } from "../firebase";
import Camera from "../assets/svg/Camera";
import Img from "../assets/svg/user.png";
import Delete from "../assets/svg/Delete";
import "../components/chat/chat.css";

const Profile = () => {
  const [img, setImg] = useState("");

  const [user, setUser] = useState();
  useEffect(() => {
    getDoc(doc(db, "users", auth.currentUser.uid)).then((docSnap) => {
      if (docSnap.exists) {
        setUser(docSnap.data());
      }
    });

    if (img) {
      const uploadImg = async () => {
        //create image path in the  storage
        const imgRef = ref(
          storage,
          `avatar/${new Date().getTime()} - ${img.name}`
        );
        try {
          // condition to replace old image to new image
          if (user.avatarPath) {
            deleteObject(ref(storage, user.avatarPath));
          }
          // upload image to storage path
          const snap = await uploadBytes(imgRef, img);
          // give image url
          const url = await getDownloadURL(ref(storage, snap.ref.fullPath));
          // add url and path in datbase
          await updateDoc(doc(db, "users", auth.currentUser.uid), {
            avatar: url,
            avatarPath: snap.ref.fullPath,
          });
          setImg("");
        } catch (error) {
          console.log(error.message);
        }
      };
      uploadImg();
    }
  }, [img]);

  const deleteImage = async () => {
    const confirm = window.confirm("Delete avatar?");
    if (confirm) {
      await deleteObject(ref(storage, user.avatarPath));
      await updateDoc(doc(db, "users", auth.currentUser.uid), {
        avatar: "",
        avatarPath: "",
      });
    }
  };
  return user ? (
    <>
      <div class="card">
        <div class="img_container">
          <img src={user.avatar || Img} alt="avatar" />
          <div className="overlay">
            <div>
              <label htmlFor="photo">
                <Camera />
              </label>
              {user.avatar ? <Delete deleteImage={deleteImage} /> : null}
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                id="photo"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
          </div>
        </div>
        <div class="infos">
          <div class="name">
            <h2>
              {user.firstName} {user.lastName}
            </h2>
            <h4>{user.email}</h4>
          </div>
          <ul class="stats">
            <li>
              <h3>Birth Day</h3>
              <h5>{user.birthDay}</h5>
            </li>
            <li>
              <h3>Country</h3>
              <h5>{user.country}</h5>
            </li>
            <li>
              <h3>Phone</h3>
              <h5>{user.phoneNumber}</h5>
            </li>
          </ul>
          <hr />
          <small>Joined on: {user.createdAt.toDate().toDateString()}</small>
        </div>
      </div>
    </>
  ) : null;
};

export default Profile;
