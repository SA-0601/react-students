import Score from "./Score";
import bootstrap from 'bootstrap';
function Student(props) {
    console.log(props);
    const {name,bio,scores} = props;
  return (
    <div class="ml-5 mt-5 mb-5 mr-5">
      <h2 class="p-3 mb-2 bg-info text-white">{name}</h2>
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
