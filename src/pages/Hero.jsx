import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div
  className="hero min-h-screen"
  style={{
    backgroundImage: "url(https://www.google.com/url?sa=i&url=https%3A%2F%2Fdepositphotos.com%2Fphotos%2Fto-do-list.html&psig=AOvVaw0jFZ3UdsqatNk4YLU9UvXG&ust=1728494051580000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCLDK4qek_4gDFQAAAAAdAAAAABAM)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        You need to work on something? Let us help you with that.
      </p>
      <Link to="/todos"><button className="btn btn-primary">Get Started</button></Link>
    </div>
  </div>
</div>
  )
}

export default Hero