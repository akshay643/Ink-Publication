import React from 'react'

import './About.css'
function About() {
  return (
    <div className="main-about">
      <div className="About p-5 text-white container-fluid">
        <h1 className="About-heading container text-center">
          About <span className="About-heading-2">us</span>{' '}
        </h1>{' '}
        <p className="about-para container mt-3">
          Today there are thousands of publishers with millions of publication
          in each field of research that are not limited to engineering,
          science, medical, social science, business, education, mathematics,
          economics etc. There are a lot of indexing available and some of most
          reputable databases are Scopus by Elsevier, Web of Science by
          Clarivate, DOAJ, PubMed, UGC CARE etc. Journals ranging from open
          access to closed access, free publication to paid publication. Author
          faces very difficulty in selecting a specific journal according their
          specific requirement.
        </p>
        <p className="about-para container mt-3">
          An author may be researcher, a PhD student, lecturer, professor, HOD,
          principle of any institution, employee of any private or public sector
          institution. Many author with low knowledge of computers face issues
          in formatting of article according to journal guidelines. And about
          many articles are just rejected due to incorrect scope of journal,
          formatting not according to journal guidelines, author not submitted
          in specific review period and much more little reasons that can be
          avoided with our help. All author needs to get their research
          published with a tight schedule with minimal budget in indexed and
          reputed journal. Many institutions require different journals indexed
          in different databases. So for all these issue we come forward to
          assist in best way we can
        </p>
      </div>
    </div>
  )
}

export default About
