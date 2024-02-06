const myTags = [
    "Java",
    "Spring Boot",
    "Docker",
    "AWS",
    "Git",
    "JPA",
    "Hibernate",
    "PostgreSQL",
    "Microservices",
    "MySQL",
    "RabbitMQ",
    "REST API",
    "API Gateway",
    
  ];

const tagCloud = TagCloud(".tagContent", myTags, {
    // radius in px
    radius: screen.width > 768 ? 200 : 150,

    // animation speed
    // slow, normal, fast
    maxSpeed: "normal",
    initSpeed: "normal",

    // 0 = top
    // 90 = left
    // 135 = right-bottom
    direction: 135,

    // interact with cursor move on mouse out
    keep: true,
});