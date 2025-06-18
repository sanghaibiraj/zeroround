export const interviewTypes = [
    { value: "technical", label: "Technical" },
    { value: "behavioral", label: "Behavioral" },
    { value: "hr", label: "HR/General" },
    { value: "design", label: "Design" },
    { value: "system-design", label: "System Design" },
    { value: "case-study", label: "Case Study" },
    { value: "coding", label: "Coding" },
    { value: "leadership", label: "Leadership" },
]

export const difficultyLevels = [
    { value: "beginner", label: "Beginner", color: "bg-green-500" },
    { value: "easy", label: "Easy", color: "bg-blue-500" },
    { value: "moderate", label: "Moderate", color: "bg-yellow-500" },
    { value: "hard", label: "Hard", color: "bg-orange-500" },
    { value: "extreme", label: "Extreme", color: "bg-red-500" },
]

export const popularTechStacks = [
    "JavaScript",
    "Python",
    "React",
    "Node.js",
    "TypeScript",
    "Java",
    "C++",
    "Go",
    "AWS",
    "Docker",
    "Kubernetes",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "GraphQL",
    "Next.js",
    "Vue.js",
    "Angular",
    "Spring Boot",
    "Django",
    "Flask",
    "Express.js",
]

export interface InterviewFormData {
    jobRole: string;
    type: string;
    level: string;
    techStacks: string[];
    sampleQuestions: string;
}

export type FormErrors = Record<string, string>;
