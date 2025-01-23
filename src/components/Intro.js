// src/components/Intro.js
import React,{ useState } from "react";
import "./intro.css";

const Intro = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true); // Set modal state to open
  };

  const closeModal = () => {
    setIsModalOpen(false); // Set modal state to closed
  };

  return (
    <div className="presentation">
      {/* Slide 1: Title Slide */}
      <div className="slide title-slide">
        <h1 className="main-title">Building a Secure and Scalable Payment Gateway</h1>
        <h2 className="subtitle">A Global E-Commerce Solution for Cisco’s Modernization Initiative</h2>
      </div>

      {/* Slide 2: Project Overview */}
      <div className="slide">
        <h2 className="section-title">Project Overview</h2>
        <div className="content-card">
          <h3 className="card-title">Secure, Scalable Payment Gateway Integration</h3>
          <p>
            <strong>Initiation Context:</strong> In January 2024, Cisco launched a global e-commerce
            platform modernization initiative aimed at enhancing the checkout process. This effort
            focused on improving scalability, security, and user experience.
          </p>
          <p>
            <strong>Business Problem:</strong> Outdated checkout systems caused high cart abandonment
            rates and lacked modern payment gateway integration. Enterprises demanded real-time
            payment validation, multi-gateway support, and enhanced security measures to build customer
            trust.
          </p>
          <p>
            <strong>Why This Project?</strong> Demonstrates engineering capabilities in designing
            scalable and secure systems. Aligns with Cisco’s vision of creating secure digital
            solutions for a safer online experience.
          </p>
        </div>
      </div>

      {/* Slide 3: Solution Architecture */}
      <div className="slide">
        <h2 className="section-title">Solution Architecture</h2>
        <div className="content-card">
          <p>
            <strong>Frontend:</strong> Responsive checkout interface using React.js with real-time
            feedback for payment validation.
          </p>
          <p>
            <strong>Backend:</strong> RESTful APIs built with Python and Flask for payment processing,
            optimized with Redis caching.
          </p>
          <p>
            <strong>Payment Gateway Integration:</strong> Integrated Stripe, PayPal, and Razorpay with
            dynamic routing for failover.
          </p>
          <p>
            <strong>Security Layer:</strong> End-to-end encryption with TLS and PCI-DSS compliance.
          </p>
          <p>
            <strong>Performance Optimization:</strong> NGINX load balancer for high transaction
            volumes and latency reduction.
          </p>
        </div>
      </div>
      <div className="slide">
        <h2 className="section-title">Solution Architecture</h2>
        <div className="content-card">
          <p>Below is the high-level architecture diagram of the system:</p>
          {/* Thumbnail of the diagram */}
          <img
            src="/ar1.png" // Update path to match your project folder
            alt="System Architecture"
            className="thumbnail"
            onClick={openModal}
          />
        </div>
      </div>

      {/* Modal for Enlarged Diagram */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              src="/ar1.png" // Update path to match your project folder
              alt="Enlarged Architecture Diagram"
              className="enlarged-diagram"
            />
            <button className="close-button" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    


      {/* Slide 4: Your Role in the Project */}
      <div className="slide">
        <h2 className="section-title">Role in the Project</h2>
        <div className="content-card">
          <p>
            Designed modular, reusable payment APIs and
            implemented encryption mechanisms.
          </p>
          <p>
         Led deployment and optimization
            of the payment system and designed failover mechanisms.
          </p>
          <p>
         API architecture, secure payment validation, and
            multi-region deployment.
          </p>
        </div>
      </div>

      {/* Slide 5: Challenges and Solutions */}
      <div className="slide">
        <h2 className="section-title">Challenges Encountered and Solutions</h2>
        <div className="content-card">
          <p>
            <strong>Latency Constraints:</strong> Implemented asynchronous APIs, Redis caching, and
            optimized database queries.
          </p>
          <p>
            <strong>Gateway Failures:</strong> Designed dynamic routing and failover mechanisms.
          </p>
          <p>
            <strong>Global Scaling:</strong> Deployed Kubernetes microservices and load balancing with
            NGINX.
          </p>
          <p>
            <strong>Security Compliance:</strong> Used TLS encryption and tokenization for PCI-DSS
            compliance.
          </p>
        </div>
      </div>

      {/* Slide 6: Impact and Achievements */}
      <div className="slide">
        <h2 className="section-title">Impact and Achievements</h2>
        <div className="content-card">
          <p>
            <strong>Business Impact:</strong> Reduced cart abandonment by 20% and supported 100+
            transactions per second during peak sales.
          </p>
          <p>
            <strong>Technical Achievements:</strong> Reduced latency by 30% and achieved multi-region
            deployment with minimal downtime.
          </p>
          <p>
            <strong>Organizational Contribution:</strong> Enhanced Cisco’s secure digital solutions
            portfolio.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;
