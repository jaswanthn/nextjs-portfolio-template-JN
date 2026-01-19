import SectionHeading from '../SectionHeading/SectionHeading'

const AboutSection = () => {
  return (
    <section id="about" className="mb-14 md:mb-[3.75rem]">
      <SectionHeading title="// About Me" subtitle="Full Stack Developer with a Product Engineering Mindset." />

      <div className="text-secondary-content mt-6 flex flex-col gap-4 text-lg leading-relaxed md:w-[80%]">
        <p>
          I am a <strong>Full Stack Developer</strong> with specialized expertise in the <strong>Salesforce Platform</strong>, <strong>React</strong>, and <strong>Angular</strong>. I bridge the gap between complex enterprise CRM needs and modern, scalable web applications.
        </p>
        <p>
          With a strong foundation in Salesforce (LWC, Apex) and modern web stacks (Next.js, Node.js), I focus on building systems that are not only robust but also provide intuitive user experiences. My background includes optimizing CRM workflows and migrating legacy applications to modern standards.
        </p>
        <p>
          I am passionate about solving real-world problems through technology and am actively looking for opportunities in <strong>Product Companies</strong> where I can contribute to high-impact projects and engineering excellence.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
