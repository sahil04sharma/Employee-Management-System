const employees = [
  {
    id: 1,
    firstName: "Arjun",
    email: "employee1@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0
    },
    tasks: [
      {
        title: "Fix Login Bug",
        description: "Resolve the issue preventing users from logging in",
        date: "2025-06-27",
        category: "Bug Fix",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Update README",
        description: "Add latest setup instructions to the project README",
        date: "2025-06-25",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Refactor Auth Module",
        description: "Clean up the authentication code for better readability",
        date: "2025-06-26",
        category: "Refactoring",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 2,
      failed: 1
    },
    tasks: [
      {
        title: "Design Landing Page",
        description: "Create initial designs for the new landing page",
        date: "2025-06-27",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar",
        description: "Make navbar responsive across devices",
        date: "2025-06-26",
        category: "UI Fix",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Test Payment Flow",
        description: "Verify the checkout process with multiple test cards",
        date: "2025-06-27",
        category: "Testing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Add Favicon",
        description: "Upload and link a favicon for all pages",
        date: "2025-06-24",
        category: "Enhancement",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rahul",
    email: "employee3@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Optimize Database",
        description: "Add indexes and optimize slow queries",
        date: "2025-06-27",
        category: "Database",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Deploy to Staging",
        description: "Push the current build to the staging server",
        date: "2025-06-26",
        category: "Deployment",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Research WebSockets",
        description: "Investigate WebSocket integration for live chat",
        date: "2025-06-27",
        category: "Research",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Footer Overlap",
        description: "Fix footer overlapping issue on mobile view",
        date: "2025-06-25",
        category: "UI Bug",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskSummary: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Set Up GitHub Actions",
        description: "Automate tests and linting using GitHub workflows",
        date: "2025-06-27",
        category: "CI/CD",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Refactor Styles",
        description: "Consolidate Tailwind classes and remove unused styles",
        date: "2025-06-26",
        category: "Cleanup",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Logout Bug",
        description: "Ensure users are properly logged out from all sessions",
        date: "2025-06-26",
        category: "Bug Fix",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Karan",
    email: "employee5@example.com",
    password: "123",
    taskSummary: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Add Dark Mode",
        description: "Implement toggle for light/dark themes",
        date: "2025-06-27",
        category: "Feature",
        active: true,
       newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix API Timeout",
        description: "Increase API timeout for slow network conditions",
        date: "2025-06-25",
        category: "Backend",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Improve SEO Tags",
        description: "Add meta tags and improve search engine visibility",
        date: "2025-06-26",
        category: "SEO",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Fix Image Compression",
        description: "Optimize image loading on homepage",
        date: "2025-06-27",
        category: "Performance",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  }
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
];



  export const setLocalStorage = ()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))

  }

  export const getLocalStorage = () =>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin = JSON.parse(localStorage.getItem('admin'))

   return {employees,admin}

  }
