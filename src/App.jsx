import Card from "./components/Card.jsx";

export default function App() {


  const techs = [
    { id: 1, title: 'Technology', image: 'https://plus.unsplash.com/premium_photo-1661877737564-3dfd7282efcb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 2, title: 'PlayGround', image: 'https://plus.unsplash.com/premium_photo-1699987045791-8753ea1bb805?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxheWdyb3VuZHxlbnwwfHwwfHx8MA%3D%3D' },
    { id: 3, title: 'Adventure', image: 'https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR2ZW50dXJlfGVufDB8fDB8fHww' },
  ];




  return (
    <div className="p-5 flex gap-5">



      {techs.map((tech) => {
        return <Card key={tech.id} title={tech.title}
          image={tech.image}
        />
      })}













    </div>
  )
}