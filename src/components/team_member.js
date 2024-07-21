
function TeamMember({name,image,post}) {
  return (
        <div class="d-flex border-1 m-2 p-2  border-primary flex-column w-auto h-auto align-item-center justify-content-center">
            <div class="d-flex flex-col align-item-center justify-content-center" >
                <img src={`/images/${image}.png`} style={{width:'300px', height:'300px'}}></img>
            </div>
            <div class="d-flex flex-col align-item-center justify-content-center">
                <h3>{name}</h3>
            </div>
            <div class="d-flex flex-col align-item-center justify-content-center">
                <h6>{post}</h6>
            </div>
        </div>
  );
}

export default TeamMember;







