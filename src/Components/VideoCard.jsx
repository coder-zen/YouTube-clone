function VideoCard(props) {
    return (
        <div>
            <img className="rounded-xl" src={props.thumbNail} alt="ThumbNail" />
            <div className="grid grid-cols-10 gap-0">
                <div className="col-span-1">
                    <img className={"w-20 h-11 rounded-full mt-3"} src={props.logo} alt="ChannelProfilePic" />
                </div>
                <div className="col-span-9 pr-0">
                    <div>
                        {props.title}
                    </div>
                    <div className="col-span-9 text-black text-base flex items-center">
                        {/* TVF Music  */}
                        {props.chanelName}
                        {props.svg}

                        {/* <span><svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-4 h-4 text-gray-500 ml-1"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10zm-1.41-6.59l5.3-5.3a1 1 0 00-1.42-1.42l-4.59 4.58-2.29-2.3a1 1 0 00-1.42 1.42l3 3a1 1 0 001.42 0z"
                                clipRule="evenodd"
                            />
                        </svg></span> */}
                    </div>
                    <div className="col-span-9 text-black text-base">
                        {/* 72K.views */}
                        {props.views} | {props.timeStamp}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoCard