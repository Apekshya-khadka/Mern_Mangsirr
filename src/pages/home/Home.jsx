import Header from "../../components/Header";


export default function Home() {
  return (
    <div>

        <Header/>

        <h1>This is home page</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, molestias eos culpa omnis veritatis minima. Culpa corporis reiciendis illo perferendis quo quisquam nostrum aperiam rem, sit cumque voluptatibus dignissimos quam?</p>
    
        <div className="w-125 border-2 grid grid-cols-3">
            <div className="h-16 bg-amber-400"></div>
            <div className="h-16 bg-red-600"></div>
            <div className="h-16 bg-green-700"></div>
        </div>
    
    
    </div>

   

  )
}
