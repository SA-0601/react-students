function Score(props){
    const {date,score} = props
    return (
        <div>
            <p>Date : {date}</p>
            <p>Score : {score}</p>
        </div>
       
    )
}
export default Score;