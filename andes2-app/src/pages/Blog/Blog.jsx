import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import "./Blog.css"
const Blog = () => {
  const [showPosts, setShowPosts] = useState(false);
  const observerRef = useRef();

  useEffect(() => {
    document.title = "Blog";
    window.scroll(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setShowPosts(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Ejecutar parse cuando showPosts cambia a true
  useEffect(() => {
    if (showPosts && window.FB) {
      window.FB.XFBML.parse();
    }
  }, [showPosts]);

  return (
    <>
      <Breadcrumbs title="Blog" pagename="Blog" />
      <section className="py-5" style={{ overflow: "hidden" }}>
        <Container>
          <Row>
            <Col md="12">
              <h1 className="mb-2 h1 font-bold">Connect with Andes2Amazon on Social Media</h1>
              <h2 className="body-text mt-1">
              Explore our latest social media posts, events, and updates directly from our Facebook page.
              </h2>
              {/* Publicaciones de Facebook cargadas solo cuando el usuario las ve */}
              <div ref={observerRef}></div>
              {showPosts && (
                <div className="blog-post-section">
                  <div
                    className="fb-post"
                    data-href="https://www.facebook.com/Andes2Amazon/posts/pfbid037jmtwRMKKLmkNsajU6cskpfRxrtabAu4vdwLhEZmrLQCqNsNjZmnusa9CQUn6LMGl"
                    data-width="100"
                  ></div>
                  <div
                    className="fb-post"
                    data-href="https://www.facebook.com/Andes2Amazon/posts/pfbid02BV6zBxAzCttDTjTxwaoy67epGqLN1oLmBHxu85vTqhjnp99xaVvdPEhdn6Y81JNVl"
                    data-width="100"
                  ></div>
                  <div
                    className="fb-post"
                    data-href="https://www.facebook.com/Andes2Amazon/posts/pfbid02mycayBmWEpWiYe3FhU99oKppkSgB8nTVFgdynDdv6msUw2nTGeU5o6qmY5AFqu6vl"
                    data-width="100"
                  ></div>
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Blog;
