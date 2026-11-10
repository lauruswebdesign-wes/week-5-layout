import Card from "./Card";
import courseData from "../data/courses";

export default function CardGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center w-full">
      {courseData.map((course) => (
        <Card 
          key={course.id}
          title={course.title}
          category={course.category}
          difficulty={course.difficulty}
        />
      ))}
    </div>
  );
}