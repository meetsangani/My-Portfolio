"use client"

import React from "react";
import { FaHtml5, FaReact, FaNodeJs, FaPython, FaJsSquare } from "react-icons/fa";
import { useMobile } from "@/hooks/use-mobile";

interface SkillBarProps {
  name: string;
  percentage: number;
  icon: string;
  color: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ name, percentage, icon, color }) => {
  const isMobile = useMobile(); 

  const getIcon = () => {
    switch (icon.toLowerCase()) {
      case "html":
        return <FaHtml5 className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />;
      case "react":
        return <FaReact className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />;
      case "javascript":
        return <FaJsSquare className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />;
      case "python":
        return <FaPython className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />;
      case "nodejs":
        return <FaNodeJs className={`h-5 w-5 sm:h-6 sm:w-6 ${color}`} />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-1 sm:space-y-2">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-1 sm:gap-2">
          {getIcon()}
          <span className="font-medium text-sm sm:text-base">{name}</span>
        </div>
        <span className="text-xs sm:text-sm">{percentage}%</span>
      </div>
      <div className="h-1.5 sm:h-2 bg-muted rounded-full overflow-hidden">
        <div 
          className="h-full bg-cyan-500" 
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;
