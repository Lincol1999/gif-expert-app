

export const GifItem = (image) => {
    const { title, url } = image;

    return (
        <div className="card">
            <img src={url.url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
