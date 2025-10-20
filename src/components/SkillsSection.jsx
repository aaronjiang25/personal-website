import { useState } from "react";
import {cn} from "@/lib/utils"
const skills = [
    // --- Languages ---
    { name: "C++", level: 60, category: "languages" },
    { name: "Python", level: 80, category: "languages" },
    { name: "Java", level: 50, category: "languages" },
    { name: "JavaScript", level: 70, category: "languages" },
    { name: "Rust", level: 35, category: "languages" },
    { name: "SQL", level: 65, category: "languages" },
    { name: "R", level: 50, category: "languages" },
  
    // --- Frontend ---
    { name: "HTML/CSS", level: 90, category: "frontend" },
    { name: "React.js", level: 70, category: "frontend" },
    { name: "Yew (WebAssembly)", level: 55, category: "frontend" },
    { name: "Bootstrap", level: 50, category: "frontend" },
  
    // --- Backend ---
    { name: "Node.js", level: 65, category: "backend" },
    { name: "Express.js", level: 65, category: "backend" },
    { name: "FastAPI", level: 55, category: "backend" },
    { name: "Actix-web", level: 65, category: "backend" },
    { name: "Spring Boot", level: 45, category: "backend" },
  
    // --- Database ---
    { name: "PostgreSQL", level: 65, category: "database" },
  
    // --- Tools & Technologies ---
    { name: "Git/GitHub", level: 90, category: "tools" },
    { name: "Docker", level: 80, category: "tools" },
    { name: "AWS", level: 50, category: "tools" },
    { name: "Splunk", level: 75, category: "tools" },
    { name: "TeamDynamix", level: 85, category: "tools" },
    { name: "Shodan", level: 75, category: "tools" },
  ];
  

const categories = ["all", "frontend", "backend", "tools", "languages"]
export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    
    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);


    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl- md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => 
                        <button 
                        key={key} 
                        onClick={() => setActiveCategory(category)}
                        className={cn(
                            "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                            activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bd-secondary"
                        )}>
                            {category}
                        </button>
                    )}
                </div> 


                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-large shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out" 
                                style={{width: skill.level + "%"}} />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-mutated-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};