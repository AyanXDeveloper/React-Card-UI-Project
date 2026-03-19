

const CardDiv = (props) => {
    return (
        <div key={props.index} className="w-87.5">
            <div className="card-demo border-none overflow-hidden rounded-2xl pb-2 shadow-md">
                <img src="https://picsum.photos/500/300" className="w-full h-50 object-cover" alt="Demo Image" />
                <div className="p-7 text-center">
                    <h5 className="text-[20px] mb-3 font-medium">{props.h5}</h5>
                    <p className="text-[16px] text-gray-600 mb-5">
                        {props.p}
                    </p>
                    <button href="#" className={`${props.status ? "text-white border-none px-6 py-2.5 rounded-3xl outline-none bg-green-500" : "text-white border-none px-4 py-2.5 rounded-3xl outline-none bg-red-500"}`}>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default CardDiv