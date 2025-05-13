import { Cloud, Server, Network, Database, Cog, Shield } from 'lucide-react'

export const services = [
  {
    id: 'cloud-computing',
    title: 'Cloud Computing',
    category: 'INFRASTRUCTURE',
    icon: <Cloud className="h-6 w-6 text-blue-500" />,
    shortDescription:
      'Flexible, scalable, and secure cloud solutions to meet your business needs.',
    description:
      'Our cloud computing services provide flexible, scalable, and secure solutions tailored to your business requirements. We help organizations adopt the right cloud strategy, whether public, private, or hybrid, to drive innovation and growth.',
    bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
    iconBgColor: 'bg-blue-500/10',
    image: '/nea.jpg',
    helpText:
      'We help organizations navigate the complexities of cloud adoption, from strategy development to implementation and ongoing management. Our team of cloud experts ensures a smooth transition to the cloud while maximizing the benefits of flexibility, scalability, and cost efficiency.',
    benefits: [
      'Increased flexibility and scalability to meet changing business needs',
      'Reduced capital expenditure with pay-as-you-go pricing models',
      'Enhanced security and compliance with industry standards',
      'Improved business agility and faster time-to-market',
      'Access to the latest technologies and innovations',
    ],
    process: [
      {
        title: 'Assessment & Strategy',
        description:
          'We evaluate your current infrastructure and business needs to develop a tailored cloud strategy that aligns with your business objectives and technical requirements.',
      },
      {
        title: 'Architecture Design',
        description:
          'Our experts design a cloud architecture that optimizes performance, security, and cost-efficiency while ensuring scalability and resilience for your business applications.',
      },
      {
        title: 'Migration & Implementation',
        description:
          'We execute a seamless migration to the cloud, minimizing disruption to your business operations through careful planning and phased implementation.',
      },
      {
        title: 'Optimization & Management',
        description:
          'Ongoing optimization and management to ensure your cloud environment continues to meet your evolving needs while maximizing performance and controlling costs.',
      },
    ],
    caseStudy: {
      title: 'Financial Services Firm Achieves 40% Cost Reduction',
      description:
        'A leading financial services company partnered with us to migrate their legacy infrastructure to a hybrid cloud solution. The result was a 40% reduction in IT costs, improved system reliability, and enhanced security compliance.',
      results: [
        '40% reduction in infrastructure costs',
        '99.99% system uptime',
        'Improved disaster recovery capabilities',
        'Enhanced security and compliance posture',
      ],
    },
  },
  {
    id: 'it-outsourcing',
    title: 'IT Outsourcing',
    category: 'MANAGED SERVICES',
    icon: <Server className="h-6 w-6 text-indigo-500" />,
    shortDescription:
      'Redefine back-office operations with end-to-end process management.',
    description:
      'Our IT outsourcing services help redefine back-office operations by taking an end-to-end process view that overrides functional boundaries, reducing costs and increasing strategic flexibility while ensuring business continuity.',
    bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
    iconBgColor: 'bg-indigo-500/10',
    image: '/new.jpg',
    helpText:
      'We provide comprehensive IT outsourcing solutions that allow you to focus on your core business while we handle your technology needs. Our approach simplifies multiple functions, reduces costs, and increases strategic flexibility by taking an end-to-end process view that overrides traditional functional boundaries.',
    benefits: [
      'Reduced operational costs and improved efficiency',
      'Access to specialized skills and expertise',
      'Increased focus on core business activities',
      'Enhanced scalability to meet changing business demands',
      'Improved service levels and performance',
      '24/7 support and monitoring',
    ],
    process: [
      {
        title: 'Needs Analysis',
        description:
          'We work with you to understand your business needs, challenges, and objectives to identify opportunities for outsourcing that will deliver maximum value.',
      },
      {
        title: 'Service Design',
        description:
          'Our team designs a customized service package that addresses your specific requirements, including service levels, performance metrics, and governance frameworks.',
      },
      {
        title: 'Transition Planning',
        description:
          'We develop a detailed transition plan to ensure a smooth handover of responsibilities, including knowledge transfer, process documentation, and risk mitigation strategies.',
      },
      {
        title: 'Service Delivery',
        description:
          'Our experts deliver ongoing services with regular reporting, performance reviews, and continuous improvement initiatives to ensure we consistently meet and exceed your expectations.',
      },
    ],
    caseStudy: {
      title: 'Manufacturing Company Transforms IT Operations',
      description:
        'A global manufacturing company outsourced their IT operations to our team, resulting in a 30% reduction in IT operational costs and improved service levels across all key metrics.',
      results: [
        '30% reduction in IT operational costs',
        '50% decrease in incident resolution time',
        'Improved user satisfaction scores',
        'Enhanced ability to scale operations',
      ],
    },
  },
  {
    id: 'network-monitoring',
    title: 'Network Monitoring',
    category: 'INFRASTRUCTURE',
    icon: <Network className="h-6 w-6 text-green-500" />,
    shortDescription:
      'Expand visibility and optimize network performance without extending your budget.',
    description:
      'Our network monitoring solutions expand visibility without extending your budget, using carrier-grade network visibility solutions to aggregate, filter, optimize, and reduce network traffic in real time for proactive management.',
    bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
    iconBgColor: 'bg-green-500/10',
    image: '/sam.jpg',
    helpText:
      'We provide comprehensive network monitoring solutions that give you real-time visibility into your network performance. Our carrier-grade solutions help you aggregate, filter, optimize, and reduce network traffic, allowing you to be proactive in managing your network infrastructure without extending your budget.',
    benefits: [
      'Real-time visibility into network performance and health',
      'Proactive identification and resolution of network issues',
      'Optimized network traffic and reduced congestion',
      'Improved network security through continuous monitoring',
      'Enhanced capacity planning and resource allocation',
      'Reduced downtime and improved user experience',
    ],
    process: [
      {
        title: 'Network Assessment',
        description:
          'We evaluate your current network infrastructure to identify monitoring requirements, performance bottlenecks, and opportunities for optimization and improvement.',
      },
      {
        title: 'Solution Design',
        description:
          'Our experts design a monitoring solution tailored to your specific network environment and business needs, including alert thresholds, reporting requirements, and visualization tools.',
      },
      {
        title: 'Implementation',
        description:
          'We deploy and configure the monitoring tools, establish baseline performance metrics, and integrate with existing systems to provide a comprehensive view of your network.',
      },
      {
        title: 'Ongoing Monitoring & Optimization',
        description:
          'Continuous monitoring, alerting, and optimization to ensure optimal network performance, with regular reviews and recommendations for improvement.',
      },
    ],
    caseStudy: {
      title: 'Healthcare Provider Achieves 99.99% Network Uptime',
      description:
        'A large healthcare provider implemented our network monitoring solution, resulting in improved network reliability, faster issue resolution, and enhanced patient care delivery.',
      results: [
        '99.99% network uptime achievement',
        '70% reduction in network-related incidents',
        '85% faster identification and resolution of issues',
        'Improved application performance for critical systems',
      ],
    },
  },
  {
    id: 'infrastructure-design',
    title: 'Infrastructure Design',
    category: 'INFRASTRUCTURE',
    icon: <Database className="h-6 w-6 text-amber-500" />,
    shortDescription:
      'Design networks that meet current and future business requirements.',
    description:
      'Our infrastructure design services help you build networks that meet your unique requirements, identifying current and future business needs to create a scalable, secure, and resilient foundation for your organization.',
    bgColor: 'bg-gradient-to-br from-amber-50 to-amber-100',
    iconBgColor: 'bg-amber-500/10',
    image: '/sam3.jpg',
    helpText:
      'We help organizations design and implement robust, scalable infrastructure solutions that align with their business objectives. Our approach focuses on creating a solid foundation that can adapt to changing business requirements while maintaining performance, security, and reliability.',
    benefits: [
      'Scalable infrastructure that grows with your business',
      'Improved performance and reliability',
      'Enhanced security and compliance',
      'Reduced operational costs through efficient design',
      'Future-proofed technology investments',
      'Simplified management and maintenance',
    ],
    process: [
      {
        title: 'Requirements Gathering',
        description:
          'We work with stakeholders to understand current and future business requirements, technical constraints, and strategic objectives to inform the infrastructure design.',
      },
      {
        title: 'Architecture Design',
        description:
          'Our experts develop a comprehensive infrastructure architecture that aligns with your business goals, incorporating best practices for performance, security, and scalability.',
      },
      {
        title: 'Implementation Planning',
        description:
          'We create a detailed implementation plan that minimizes disruption to your business operations, including phasing, testing, and rollback procedures.',
      },
      {
        title: 'Deployment & Testing',
        description:
          'Our team deploys the new infrastructure and conducts thorough testing to ensure everything works as expected, with comprehensive documentation and knowledge transfer.',
      },
    ],
    caseStudy: {
      title: 'Retail Chain Modernizes Infrastructure',
      description:
        'A national retail chain partnered with us to redesign their aging infrastructure, resulting in improved performance, enhanced security, and the ability to rapidly deploy new stores.',
      results: [
        '60% improvement in application performance',
        'Reduced new store deployment time from weeks to days',
        'Enhanced security posture with zero breaches',
        'Simplified management reducing IT overhead by 25%',
      ],
    },
  },
  {
    id: 'business-applications',
    title: 'Business Applications and Automation',
    category: 'SOFTWARE',
    icon: <Cog className="h-6 w-6 text-purple-500" />,
    shortDescription:
      'Improve business performance by automating operations and streamlining processes.',
    description:
      'Our business applications and automation services help improve performance by automating daily operations and streamlining processes, driving efficiency, productivity, and innovation across your organization.',
    bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
    iconBgColor: 'bg-purple-500/10',
    image: '/na.jpg',
    helpText:
      'We help businesses automate routine tasks and streamline processes to improve efficiency, reduce errors, and free up valuable resources. Our solutions are designed to integrate with your existing systems and workflows, providing a seamless experience for your team and customers.',
    benefits: [
      'Increased operational efficiency and productivity',
      'Reduced manual errors and improved data accuracy',
      'Faster processing times and improved customer service',
      'Better visibility and control over business processes',
      'Scalable solutions that grow with your business',
      'Enhanced decision-making through improved data access',
    ],
    process: [
      {
        title: 'Process Analysis',
        description:
          'We analyze your current processes to identify bottlenecks, inefficiencies, and opportunities for automation and improvement that will deliver the greatest business value.',
      },
      {
        title: 'Solution Design',
        description:
          'Our experts design a customized automation solution that addresses your specific requirements, incorporating user experience design, integration requirements, and performance considerations.',
      },
      {
        title: 'Development & Integration',
        description:
          'We develop and integrate the automation solution with your existing systems and workflows, using agile methodologies to ensure the solution meets your evolving needs.',
      },
      {
        title: 'Training & Support',
        description:
          'We provide comprehensive training and ongoing support to ensure successful adoption and use, with continuous improvement initiatives to maximize the value of your investment.',
      },
    ],
    caseStudy: {
      title: 'Logistics Company Transforms Operations',
      description:
        'A logistics company implemented our automation solution to streamline their order processing and tracking, resulting in significant efficiency gains and improved customer satisfaction.',
      results: [
        '75% reduction in order processing time',
        '90% decrease in data entry errors',
        '35% improvement in customer satisfaction scores',
        'Ability to handle 3x order volume without additional staff',
      ],
    },
  },
  {
    id: 'cybersecurity',
    title: 'Cybersecurity & Compliance',
    category: 'SECURITY',
    icon: <Shield className="h-6 w-6 text-red-500" />,
    shortDescription:
      'Protect your business with comprehensive security solutions and compliance management.',
    description:
      'Our cybersecurity and compliance services provide robust protection for your digital assets while ensuring adherence to regulatory requirements. We deliver end-to-end security solutions from assessment to implementation and ongoing management.',
    bgColor: 'bg-gradient-to-br from-red-50 to-red-100',
    iconBgColor: 'bg-red-500/10',
    image: '/nasda.jpg',
    helpText:
      "In today's digital landscape, cybersecurity is not optional—it's essential. We help organizations build comprehensive security programs that protect against evolving threats while ensuring compliance with industry regulations and standards. Our approach combines advanced technology, expert knowledge, and proven methodologies to deliver security solutions that protect your business without impeding operations.",
    benefits: [
      'Comprehensive protection against evolving cyber threats',
      'Reduced risk of data breaches and associated costs',
      'Ensured compliance with industry regulations (GDPR, HIPAA, PCI DSS, etc.)',
      'Enhanced customer trust and brand reputation',
      'Minimized downtime from security incidents',
      'Expert guidance on security best practices and compliance requirements',
    ],
    process: [
      {
        title: 'Security Assessment',
        description:
          'We conduct a thorough assessment of your current security posture, including vulnerability scanning, penetration testing, and compliance gap analysis to identify risks and prioritize remediation efforts.',
      },
      {
        title: 'Security Strategy Development',
        description:
          'Based on the assessment findings, we develop a comprehensive security strategy that aligns with your business objectives, risk tolerance, and compliance requirements, including policies, procedures, and technical controls.',
      },
      {
        title: 'Implementation & Integration',
        description:
          'Our security experts implement the recommended security controls and integrate them with your existing systems, ensuring minimal disruption to your business operations while maximizing protection.',
      },
      {
        title: 'Continuous Monitoring & Management',
        description:
          'We provide ongoing security monitoring, threat detection, incident response, and compliance management to ensure your security posture remains strong against evolving threats and regulatory changes.',
      },
    ],
    caseStudy: {
      title: 'Financial Institution Strengthens Security Posture',
      description:
        'A regional financial institution partnered with us to enhance their cybersecurity program and achieve compliance with industry regulations, resulting in improved security posture and successful regulatory audits.',
      results: [
        'Zero security breaches since implementation',
        '100% compliance with regulatory requirements',
        '90% reduction in high-risk vulnerabilities',
        'Successful completion of regulatory audits with no findings',
      ],
    },
  },
]
