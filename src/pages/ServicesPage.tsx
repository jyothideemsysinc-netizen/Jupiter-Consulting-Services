import { motion } from 'motion/react';
import { useEffect } from 'react';
import { Database, Layout, Network, Briefcase, Globe, MonitorSmartphone, Server, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: "The ERP/CRM Group",
    description: "The ERP/CRM Group specializes in ERP/CRM implementation, upgrade, customization and support. This group has resources with experience in such areas as: SAP R/3, PeopleSoft, Oracle Apps, Siebel 8.1, Lawson, and JD Edwards. We help to identify the best architecture and tools for integration of existing application and data, implementation of new packages, to provide custom functionality for competitive advantage.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Briefcase
  },
  {
    title: "The Networking/Admin Group",
    description: "This Group specializes in Broadband Communications, LAN/WAN CISCO IOS 15, NORTEL Networks (Frame, ATM, DSL, IP, FTTX etc), Remote Access Systems, Unix Systems, Windows OS, Security Systems, Video Distribution Networks including Streaming, Video Conf, and Broadcast, Telephone Networks including Avaya VoIP, UCCE, Wireless Networks including WIFI, Data Storage Arrays, Fiber Optic Distribution, Power Systems, Voice Mail, Monitoring Systems, Cable and Infra-structure, Security, Microwave, and Helpdesk.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Network
  },
  {
    title: "The PMO Group",
    description: "This Group Specializes in PMP certified professionals with expertise in Agile, Scrum, Waterfall, Six Sigma methodologies and experience in Work Bench, MS Project 2013 software.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Layout
  },
  {
    title: "The eBIZ Group",
    description: "The eBIZ Group develops web, e-commerce, Oracle E-Business Suite, and other Internet based applications and web design/services for companies across a wide spectrum. The technology is centered on Java J2EE with complementing skills such as Sencha Ext JS, Mule, JDK, JBuilder, JavaScript, Perl, CGI, Swing, Beans, JDBC, Spring, Hibernate, ATG Dynamo, CORBA, ORBIX, Cold Fusion, EDI and other related technologies.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Globe
  },
  {
    title: "The GUI Group",
    description: "The GUI Group specializes in Microsoft's Visual Suite technologies for GUI design, namely C#, VB.NET, .NET Framework 4.0, and Visual C++ with MFC. Our experts have experience in programming handheld devices, additional skills in utilities and tools such as Crystal Reports, ODBC, ActiveX, OLE, COM / DCOM.",
    image: "https://images.unsplash.com/photo-1561736778-d581cc131a23?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: MonitorSmartphone
  },
  {
    title: "The DB Group",
    description: "The DB Group focuses mainly on prevalent and emerging RDBMS, front-end technology, and Data Warehousing. This Group has resources with experience in RDBMS such as Oracle 11g, Sybase, MS-SQL Server 2012, DB2, UDB and Informix under both UNIX and Windows platforms. Data Warehousing group has resources with Informatica, Manhattan, Data Stage, and MDM.",
    image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Database
  },
  {
    title: "The AS/400 and Mainframe Group",
    description: "The AS/400-Mainframe Group caters to the need of IBM AS/400 and Mainframe customers, with resources and expertise in COBOL, DB2, CICS, RPG/400, COBOL/400, RPG/ILE, SYNON, JD Edwards, BPCS, and AS/SET etc.",
    image: "https://images.unsplash.com/photo-1588508065123-287b28e0141c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: Server
  },
  {
    title: "The QA/BA Group",
    description: "We also have QA/BA Group focused on Rational and Mercury tools, providing comprehensive quality assurance and business analysis services to ensure our solutions meet the highest standards of excellence.",
    image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: ShieldCheck
  }
];

export function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-brand-gray-light">
      {/* Hero Section */}
      <div className="bg-brand-blue-dark py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center" />
          <div className="absolute inset-0 bg-brand-blue-dark/80 mix-blend-multiply" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-brand-orange"></div>
              <span className="text-brand-orange text-sm font-bold tracking-widest uppercase">Our Capabilities</span>
              <div className="h-px w-8 bg-brand-orange"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Explore Our Services</h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
              We deliver comprehensive IT consulting and solutions across multiple technological domains to drive your business forward.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 xl:px-12 py-24">
        <div className="space-y-24">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;
            const Icon = service.icon;
            
            return (
              <motion.div 
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
              >
                {/* Image Side */}
                <div className="w-full lg:w-1/2 relative group">
                  <div className="absolute -inset-4 bg-brand-orange/10 rounded-xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500"></div>
                  <div className="relative rounded-xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <div className="absolute inset-0 bg-brand-blue-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div className="w-14 h-14 bg-white shadow-md rounded-xl flex items-center justify-center mb-8">
                    <Icon className="w-7 h-7 text-brand-orange" />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold text-brand-blue-dark leading-tight">
                    {service.title}
                  </h2>
                  
                  <div className="w-20 h-1 bg-brand-orange"></div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed content-text">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Bottom CTA */}
      <div className="bg-white border-t border-gray-100 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-brand-blue-dark mb-6">Ready to transform your business?</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Contact us today to discuss how our specialized groups can add value to your next project.
            </p>
            <a href="/contact" className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orange-light text-white px-8 py-4 font-bold tracking-wide transition-all hover:-translate-y-1 shadow-lg shadow-brand-orange/30">
              Get in Touch Today
              <span className="text-xl">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
