function BookCard(props){
    return(
        <div className="book">
            <img src={props.cover} alt="обложка" width="300"/>
            <h2>{props.name}</h2>
            <p>{props.avtor}</p>

        </div>
    );
}
export default BookCard;