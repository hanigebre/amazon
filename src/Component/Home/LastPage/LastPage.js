
import React from 'react'

function LastPage() {
    return (
        <div style={{ clear: "both" }}>
            <div style={{
                minWidth: "940px",
                position: "relative",
            }}>
                <div style={{
                    boxSizing: "border-box"

                }}>
                    <div style={{

                        border: "1px solid #DDD",
                        borderRadius: "5px",
                    }}>
                        <div className='lastPage__main' style={{


                            padding: "0 20px"
                        }}>
                            <div style={{
                                paddingTop: "90px",
                                paddingBottom: "5px",
                                fontSize: "13px",
                                // border:"solid",
                                // borderBlock:"broken"

                            }}>
                                See personalized recommendations
                            </div>
                            <div style={{
                                paddingBottom: "5px",
                                backgroundColor: "#FFC73A",
                                width: "210px",
                                marginLeft: "665px",
                                marginRight: "50px",
                                // textAlign:"center",
                                alignItems: "center",
                                borderRadius: "5px",
                                fontSize: "13px",
                                fontWeight: "bold"
                            }}>
                                Sign in
                            </div>
                            <div style={{
                                fontSize: "13px",
                            }}>
                                New customer? Start here
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ color: "black", padding: "10px" }}>

                </div>

            </div>


        </div>


    )
}

export default LastPage