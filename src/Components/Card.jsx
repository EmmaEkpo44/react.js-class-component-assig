export const Card = ({img,content,color,height,fontSize,width,marginTop,backgroundColor,heading}) =>{
    return(
        <>
            <div className="mx-auto" style={{backgroundColor,width}}>
                <img src={img} className="card-img-top" height={height} style={{marginTop}} alt=""/>
                <div className="card-body p-3">
                    <h5 className="card-title text-center text-info" style={{color,fontSize}}>{heading}</h5>
                    <p className="card-text text-center" style={{color,fontSize}}>{content}</p>
                </div>
            </div>
        </>
    )
}
