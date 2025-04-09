import React from 'react';
import vitelogo from '/vite.svg';



const ProfileCard = ({profile}) => {
    return (
        <div
            style={{
                border: "2px solid lightgreen",
                padding: "20px",
                width: "400px", 
                height: "200px",
                borderRadius: "15px",
                backgroundColor: "#d6f5ff",
                boxShadow: "0 4px 8px rgba(78, 190, 102, 0.67)",
                position: "relative", 
            }}
        >
            <img
                style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "20%",
                    border:"2px solid black" ,
                    backgroundColor: "white",
                    position: "absolute", 
                    top: "20px",
                    right: "20px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
                }}
                src={vitelogo}
                alt="Logo"
            />
            <div style={{ textAlign: "left", padding: "20px", paddingRight: "140px", color: "black", fontSize: "18px", fontWeight: "bold", marginTop: "25px", }}> 
                <div>
                    <span style={{ fontWeight: "bold" }}>Name: </span>
                    <span>{profile.name}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Department: </span>
                    <span>{profile.department}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Year: </span>
                    <span>{profile.year}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Phone: </span>
                    <span>{profile.phone}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Address: </span>
                    <span>{profile.address}</span>
                </div>
                <div>
                    <span style={{ fontWeight: "bold" }}>Pincode: </span>
                    <span>{profile.pincode}</span>
                </div>
            </div>
            <a href="https://www.linkedin.com/feed/" target="blankz">LinkedIn profile</a>
        </div>
    );
};

export default ProfileCard;
