import Score from "./Score";
function Student(props) {
    console.log(props);
    const {name,bio,scores} = props;
  return (
    <div>
      <h2>{name}</h2>
      <p>{bio}</p>
      
        {scores.map((ele,index) => (
            <Score {...ele} key={index}/>
            )
           )
        }
      
      
    </div>
  );
}
export default Student;
