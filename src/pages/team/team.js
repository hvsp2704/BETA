import React from "react";
import TeamMember from "../../components/team_member";
function Team() {
  const members = [
    {
      "member": "snigdha",
      "image": "person",
      "post": "G.Sec."
    },
    {
      "member": "snidha",
      "image": "person",
      "post": "G.Sec."
    },
    {
      "member": "snigdha",
      "image": "person",
      "post": "G.Sec."
    },
    {
      "member": "snigdha",
      "image": "person",
      "post": "G.Sec."
    },
    {
      "member": "snigdha",
      "image": "person",
      "post": "G.Sec."
    },
  ];
  const content = members.map(({member, image, post}, index) => (
    <TeamMember
      name={member}
      image={image}
      post={post}
    />
  ))
  return (
    <div style={{width:"100vh"}}>
          <div className="team p-2 d-flex flex-wrap flex-row align-content-start justify-item-start" style={{ minWidth:'100vh',width:'100%', maxWidth: '100vh' }}>
      {content}
    </div>
    </div>
  );
}
export default Team;