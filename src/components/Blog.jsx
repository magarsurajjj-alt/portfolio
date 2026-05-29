export default function Blog() {
  const posts = [
    {
      title: "My First Cybersecurity Writeup – VAPT Experience",
      desc: "My first real-world enterprise VAPT experience in an insurance company covering network, web, and internal security assessment.",
      link: "https://dev.to/surajjj_magar/my-first-cybersecurity-writeup-vapt-experience-36n1"
    },
    {
      title: "SQL Injection Basics",
      desc: "How I tested SQLi in real applications",
      link: "#"
    },
    {
      title: "Burp Suite Workflow",
      desc: "My VAPT methodology using Burp Suite",
      link: "#"
    }
  ];

  return (
    <section id="blog">
      <h1>My <span>Blog</span></h1>

      <div className="grid">
        {posts.map((p, i) => (
          <div className="card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>

            <a
              className="btn"
              href={p.link}
              target="_blank"
              rel="noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}