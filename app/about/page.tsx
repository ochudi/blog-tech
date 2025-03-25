import Link from "next/link";

export const metadata = {
  title: "About | Chudi's Blog",
  description:
    "Discover the journey of Chukwudi Peter Ofoma, a software engineer balancing multiple roles while continuously learning and sharing insights.",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">
      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-4xl font-bold tracking-tight">About Me</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Software Engineer | Tech Enthusiast | Lifelong Learner
        </p>
      </section>

      {/* Content Section */}
      <section className="space-y-8">
        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Who I Am</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            I’m <strong>Chukwudi Peter Ofoma</strong>, a software engineer passionate about 
            building scalable applications and exploring new technologies.  
            My work spans multiple companies, advisory roles, and freelance projects,  
            all while continuously learning and pushing my limits.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">Why I Write</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            Writing is a way for me to document, refine, and share knowledge.  
            Whether it’s technical deep dives, industry insights, or personal reflections,  
            this blog is a space to explore ideas and contribute to the developer community.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">What I Do</h2>
          <ul className="mt-3 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
            <li><strong>Software Engineer</strong> – Working across three companies, balancing multiple roles efficiently.</li>
            <li><strong>Advisor</strong> – Providing guidance at a prestigious school, shaping the next generation of tech leaders.</li>
            <li><strong>Freelancer & Consultant</strong> – Tackling exciting projects, solving problems, and optimizing systems.</li>
            <li><strong>Lifelong Learner</strong> – Continuously exploring software, philosophy, and emerging technologies.</li>
          </ul>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow">
          <h2 className="text-2xl font-semibold">What You’ll Find Here</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed">
            This blog covers a mix of technical and personal insights, including:
          </p>
          <ul className="mt-3 list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed">
            <li>In-depth technical tutorials and real-world coding experiences.</li>
            <li>Explorations in UI/UX, frontend development, and design principles.</li>
            <li>Discussions on emerging technologies, AI, and Web3.</li>
            <li>Reflections on problem-solving, productivity, and personal growth.</li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-semibold">Let’s Connect</h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 leading-relaxed">
          If you’re interested in collaborating, exchanging ideas, or discussing tech,  
          feel free to reach out. Connect with me on LinkedIn or check out my projects on GitHub.
        </p>
        <div className="mt-5 flex justify-center space-x-4">
          <Link
            href="https://linkedin.com/in/ochudi"
            className="px-4 py-2 bg-blue-500 text-white rounded-md shadow hover:bg-blue-700 transition"
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/ochudi"
            className="px-4 py-2 bg-gray-500 text-white rounded-md shadow hover:bg-gray-700 transition"
          >
            GitHub
          </Link>
        </div>
      </section>
    </div>
  );
}
