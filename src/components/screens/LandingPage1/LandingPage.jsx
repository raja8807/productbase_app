"use client";

import React from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CloudUpload,
  Code2,
  Database,
  FileSpreadsheet,
  KeyRound,
  Search,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import styles from "./LandingPage.module.scss";
import Link from "next/link";

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered Search",
    description:
      "Understand user intent and return relevant products.",
  },
  {
    icon: CloudUpload,
    title: "Easy Data Import",
    description:
      "Upload your product catalog from Excel in seconds.",
  },
  {
    icon: Code2,
    title: "Developer Friendly",
    description:
      "Simple and powerful APIs with secure authentication.",
  },
  {
    icon: Zap,
    title: "Built for Growth",
    description:
      "Scale your product search without the complexity.",
  },
];

const steps = [
  {
    number: "01",
    icon: FileSpreadsheet,
    title: "Upload Your Catalog",
    description: "Import your products from an Excel file.",
  },
  {
    number: "02",
    icon: Database,
    title: "We Process Your Data",
    description:
      "ProductBase normalizes your data and creates vector embeddings.",
  },
  {
    number: "03",
    icon: KeyRound,
    title: "Get Your API Key",
    description:
      "Instantly get your API key to access the search API.",
  },
  {
    number: "04",
    icon: Code2,
    title: "Integrate & Search",
    description:
      "Add AI-powered search to your application and deliver better results.",
  },
];

const searchResults = [
  {
    name: "Nike Air Zoom Pegasus",
    description:
      "Lightweight and comfortable running shoes for everyday training.",
    tags: ["Running", "Shoes", "Nike"],
    price: "$129.99",
    image: "/products/nike.png",
  },
  {
    name: "Adidas Ultraboost",
    description:
      "High-performance shoes with superior comfort and energy return.",
    tags: ["Running", "Shoes", "Adidas"],
    price: "$139.99",
    image: "/products/adidas.png",
  },
  {
    name: "ASICS Gel-Nimbus",
    description:
      "Maximum cushioning for a comfortable running experience.",
    tags: ["Running", "Shoes", "ASICS"],
    price: "$149.99",
    image: "/products/asics.png",
  },
];

const LandingPage1 = () => {
  return (
    <div className={styles.landing}>
      {/* Navbar */}
      <header className={styles.navbar}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <img src="/logo.png" alt="ProductBase" />
          </Link>

          <nav className={styles.nav}>
            <a href="#features">Features</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#pricing">Pricing</a>
            <a href="#docs">Docs</a>
            <a href="#about">About</a>
          </nav>

          <div className={styles.navActions}>
            <a href="/auth" className={styles.signIn}>
              Sign In
            </a>

            <a href="/auth" className={styles.primaryButton}>
              Get Started
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <Sparkles size={13} />
                AI-POWERED PRODUCT SEARCH
              </div>

              <h1>
                Smarter Product Search for{" "}
                <span>Modern Applications.</span>
              </h1>

              <p>
                ProductBase helps you build intelligent product search
                into your applications. Upload your product catalog,
                get an API key, and start delivering relevant results
                with AI-powered search.
              </p>

              <div className={styles.heroActions}>
                <a href="/auth" className={styles.primaryButton}>
                  Get Started Free
                  <ArrowRight size={16} />
                </a>

                <a href="#docs" className={styles.secondaryButton}>
                  View Documentation
                </a>
              </div>

              <div className={styles.heroPoints}>
                <div>
                  <Check size={15} />
                  No credit card required
                </div>

                <div>
                  <Check size={15} />
                  Setup in minutes
                </div>

                <div>
                  <Check size={15} />
                  Developer friendly
                </div>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className={styles.dashboardWrapper}>
              <div className={styles.dashboard}>
                <div className={styles.dashboardSidebar}>
                  <img src="/logo.png" alt="ProductBase" />

                  <div className={styles.sidebarItems}>
                    <div className={styles.sidebarItemActive}>
                      <Database size={15} />
                      Dashboard
                    </div>

                    <div className={styles.sidebarItem}>
                      <Search size={15} />
                      Products
                    </div>

                    <div className={styles.sidebarItem}>
                      <CloudUpload size={15} />
                      Import
                    </div>

                    <div className={styles.sidebarItem}>
                      <KeyRound size={15} />
                      API Keys
                    </div>
                  </div>
                </div>

                <div className={styles.dashboardMain}>
                  <div className={styles.dashboardHeader}>
                    <div>
                      <span>Product Catalog</span>
                      <h3>Products</h3>
                    </div>

                    <button>
                      <CloudUpload size={14} />
                      Import
                    </button>
                  </div>

                  <div className={styles.searchBar}>
                    <Search size={14} />
                    <span>Search products...</span>
                  </div>

                  <div className={styles.productTable}>
                    <div className={styles.tableHeader}>
                      <span>Product</span>
                      <span>Category</span>
                      <span>Price</span>
                      <span>Status</span>
                    </div>

                    {[
                      ["Wireless Headphones", "Electronics", "$59.99"],
                      ["Running Shoes", "Footwear", "$89.99"],
                      ["Smart Watch", "Electronics", "$129.99"],
                      ["Backpack", "Accessories", "$49.99"],
                      ["Sunglasses", "Accessories", "$29.99"],
                    ].map((product, index) => (
                      <div
                        className={styles.tableRow}
                        key={index}
                      >
                        <div className={styles.productName}>
                          <div className={styles.productPlaceholder}>
                            <PackageIcon />
                          </div>
                          {product[0]}
                        </div>

                        <span>{product[1]}</span>

                        <strong>{product[2]}</strong>

                        <small>Active</small>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.dashboardCaption}>
                <ArrowRight size={15} />
                Your product data,
                <br />
                ready for more.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className={styles.features}
      >
        <div className={styles.container}>
          <div className={styles.featureGrid}>
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <div
                  className={styles.feature}
                  key={feature.title}
                >
                  <div className={styles.featureIcon}>
                    <Icon size={22} />
                  </div>

                  <h3>{feature.title}</h3>

                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className={styles.howItWorks}
      >
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <h2>How It Works</h2>
            <p>
              Get started in minutes. From your data to
              AI-powered search.
            </p>
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <React.Fragment key={step.number}>
                  <div className={styles.step}>
                    <div className={styles.stepNumber}>
                      {step.number}
                    </div>

                    <div className={styles.stepIcon}>
                      <Icon size={25} />
                    </div>

                    <h3>{step.title}</h3>

                    <p>{step.description}</p>
                  </div>

                  {index < steps.length - 1 && (
                    <ChevronRight
                      className={styles.stepArrow}
                      size={22}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search Demo */}
      <section className={styles.searchSection}>
        <div className={styles.container}>
          <div className={styles.searchGrid}>
            <div className={styles.searchContent}>
              <div className={styles.eyebrow}>
                SEE IT IN ACTION
              </div>

              <h2>
                Search That{" "}
                <span>Understands</span>
              </h2>

              <p>
                Go beyond keyword matching. ProductBase uses
                hybrid semantic search to understand context
                and return the most relevant products — just
                like the top e-commerce brands.
              </p>

              <div className={styles.checkList}>
                <div>
                  <Check size={15} />
                  Semantic search with AI
                </div>

                <div>
                  <Check size={15} />
                  Handles natural language queries
                </div>

                <div>
                  <Check size={15} />
                  Relevant results every time
                </div>
              </div>
            </div>

            <div className={styles.searchDemo}>
              <div className={styles.searchInput}>
                <Search size={17} />
                <span>comfortable shoes for running</span>

                <button>
                  Search
                </button>
              </div>

              <div className={styles.results}>
                {searchResults.map((result) => (
                  <div
                    className={styles.result}
                    key={result.name}
                  >
                    <div className={styles.resultImage}>
                      <div className={styles.shoePlaceholder}>
                        <PackageIcon />
                      </div>
                    </div>

                    <div className={styles.resultInfo}>
                      <h4>{result.name}</h4>

                      <p>{result.description}</p>

                      <div className={styles.tags}>
                        {result.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <strong>{result.price}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer section */}
      <section
        id="docs"
        className={styles.developer}
      >
        <div className={styles.container}>
          <div className={styles.developerHeading}>
            <div className={styles.eyebrow}>
              BUILT FOR DEVELOPERS
            </div>

            <h2>
              Simple APIs.{" "}
              <span>Powerful Search.</span>
            </h2>

            <p>
              Integrate AI search into your application with
              just a few lines of code.
            </p>
          </div>

          <div className={styles.developerGrid}>
            <div className={styles.codeBlock}>
              <div className={styles.codeHeader}>
                <div>
                  <span className={styles.activeTab}>
                    cURL
                  </span>
                  <span>Python</span>
                  <span>JavaScript</span>
                </div>

                <button>
                  Copy
                </button>
              </div>

              <pre>
                <code>
{`curl -X POST https://api.productbase.app/v1/search \\

  -H "Authorization: Bearer YOUR_API_KEY" \\

  -H "Content-Type: application/json" \\

  -d '{
    "query": "wireless headphones",
    "limit": 10
  }'`}
                </code>
              </pre>
            </div>

            <div className={styles.developerFeatures}>
              <DeveloperFeature
                icon={Code2}
                title="REST API"
                text="Simple and consistent API design."
              />

              <DeveloperFeature
                icon={ShieldCheck}
                title="API Key Authentication"
                text="Secure access to your product data."
              />

              <DeveloperFeature
                icon={FileSpreadsheet}
                title="Detailed Documentation"
                text="Get started quickly with our docs."
              />

              <DeveloperFeature
                icon={Zap}
                title="Built for Scale"
                text="Handle thousands of queries with ease."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} />

        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <span>READY TO GET STARTED?</span>

            <h2>
              Build Smarter Product Experiences
              <br />
              with <strong>ProductBase.</strong>
            </h2>

            <p>
              Start for free and see how easy it is to add
              AI-powered search to your application.
            </p>

            <div className={styles.ctaActions}>
              <a
                href="/auth"
                className={styles.ctaPrimary}
              >
                Get Started Free
                <ArrowRight size={16} />
              </a>

              <a
                href="#docs"
                className={styles.ctaSecondary}
              >
                View Documentation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerTop}>
            <div>
              <img
                src="/logo.png"
                alt="ProductBase"
              />

              <p>
                Your product catalog, simplified.
              </p>
            </div>

            <div className={styles.footerLinks}>
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#docs">Documentation</a>
              <a href="#about">About</a>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <span>
              © 2026 ProductBase. All rights reserved.
            </span>

            <div>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const DeveloperFeature = ({
  icon: Icon,
  title,
  text,
}) => {
  return (
    <div className={styles.developerFeature}>
      <div className={styles.developerFeatureIcon}>
        <Icon size={19} />
      </div>

      <div>
        <h4>{title}</h4>
        <p>{text}</p>
      </div>
    </div>
  );
};

const PackageIcon = () => {
  return (
    <div className={styles.packageIcon}>
      <div />
      <div />
    </div>
  );
};

export default LandingPage1;