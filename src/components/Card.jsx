import CardDiv from "./CardDiv"

const Card = (props) => {
    const userStatus = true

    return (
        <>
            {props.cardData.map((item, index) => {
                console.log(index)
                return <CardDiv key={index} h5={item.h5} p={item.p} status={userStatus} />
            })}
        </>
    )
}

export default Card