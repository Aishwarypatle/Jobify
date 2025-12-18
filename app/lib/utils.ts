import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const formatDate = (dateString: string) => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
}

export const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + '...';
}

export const formatJobType = (jobType: string) => {
  switch (jobType.toLowerCase()) {
    case 'full_time':
      return 'Full Time';
    case 'part_time':
      return 'Part Time';
    case 'contract':
      return 'Contract';
    case 'internship':
      return 'Internship';
    default:
      return capitalizeFirstLetter(jobType);
  }
}

export const formatLocation = (location: string) => {
  if (location.toLowerCase() === 'worldwide') {
    return 'Remote';
  }
  if(location.split(',').length > 1 ) {
    return `${location.split(',')[0]} + ${location.split(',').length - 1} more`;
  }
  return location;
}

export const formatJobPostedDateAgo = (dateString: string) => {
  const postedDate = new Date(dateString);
  const currentDate = new Date();
  const diffTime = Math.abs(currentDate.getTime() - postedDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
  return `${diffDays} days ago`;
}

export const formatRemoteStatus = (location: string) => {
  if (location.toLowerCase() === 'worldwide') {
    return 'fully remote';
  }
  return 'partially remote';
}