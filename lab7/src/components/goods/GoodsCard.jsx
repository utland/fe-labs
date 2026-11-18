function GoodsCard({ name, picture, price }) {
    return (
        <div className="goods-item">
            <img src={picture} alt={name} />
            <h3>{name}</h3>
            <p>Price: {price}</p>
        </div>
    );
}

export default GoodsCard;