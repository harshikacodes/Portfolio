import { motion } from "framer-motion";

const journey = [
  {
    role: "Student",
    place: "Computer Science / Engineering",
    time: "Present",
    description:
      "Currently pursuing my studies while focusing on building a strong foundation in computer science concepts.",
  },
  {
    role: "Self-Learning Developer",
    place: "Independent Learning",
    time: "Ongoing",
    description:
      "Learning Java, DSA, C, Python, and frontend development through practice, projects, and consistent self-study.",
  },
  {
    role: "Problem Solving Practice",
    place: "DSA & Logic Building",
    time: "Daily",
    description:
      "Regularly practicing problem solving to improve logic, coding skills, and confidence.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section">
      <h2 className="title text-center mb-12">Journey</h2>

      <div className="max-w-4xl mx-auto space-y-6">
        {journey.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="glass soft-shadow rounded-2xl p-8"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">
                {item.role}
              </h3>
              <span className="text-sm text-gray-500">
                {item.time}
              </span>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              {item.place}
            </p>

            <p className="text-gray-700 text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
