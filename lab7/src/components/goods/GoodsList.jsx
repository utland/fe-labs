import GoodsCard from "./GoodsCard";

function GoodsList(props) {
    console.log(props.products);
    return (
        <>
            <h2>Goods</h2>
            <div className="goods-list">
                {props.products.map((good) => (
                    <GoodsCard
                        key={good.id}
                        name={good.name}
                        picture={good.picture}
                        price={good.price}
                    />
                ))}
            </div>
        </>
    );
}

export default GoodsList;