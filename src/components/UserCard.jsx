function UserCard(props){
    return(
        <div className="card">
            <img src={props.avatar} alt="аватар" width="80" />
            <h2>{props.name}</h2>
            <p>Город:{props.city}</p>
        </div>
    );
}
export default UserCard; // нужно обязательно прописывать