

export default function Tour({image, info, price, name}) {
  return (
    <div>
        <img src={image} alt="" />
        <h2>{name}</h2>
        <p>{info}</p>
        <p>{price}</p>
    </div>
  )
}
