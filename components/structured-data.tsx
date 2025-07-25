export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Meet Sangani",
    "jobTitle": "MERN Stack Developer",
    "description": "MERN Stack Developer with 6+ months experience",
    "url": "https://meetsangani.com",
    "sameAs": [
      "https://github.com/meetsangani",
      "https://linkedin.com/in/meet-sangani"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
