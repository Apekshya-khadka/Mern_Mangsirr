export default function Card({ title, image }) {

  return (
    <div className="w-sm shadow-2xl">
      <img className="" src={image} alt="" />

      <div className="p-3 space-y-3">

        <h1 className="font-semibold text-xl">{title}</h1>
        <p className="text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad a expedita et repellat sint ullam vitae. Perferendis, nesciunt distinctio! Eaque eos nesciunt molestias vero blanditiis sit illum quasi mollitia hic.</p>

        <button className="border px-5 py-2 rounded-sm border-green-600">Go AnyWhere</button>

      </div>

    </div>
  )
}