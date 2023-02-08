import React from "react";

function Official() {
  return (
    <div className="official">
      <div className="container text-center py-5">
        <div className="row">
          <div>
            <h5>OUR OFFICIAL PARTNER</h5>
          </div>
          <div className="partner">
            <p>
              With over 30 years of sector experience, Civica are committed to
              putting people first and continually improving outcomes for
              citizens. Building on over 22 years of solid year on year growth,
              and Civica's digital technologies are already trusted to deliver
              better outcomes for over 90 million worldwide. Through Civica's
              commitment to turning ideas into action, they help over 2.5
              million professionals deliver the public services of the future
              every day.
            </p>
          </div>
        </div>{" "}
        <br />
        <div className="row">
          <div>
            <h5>SECTORS THEY SERVE</h5>
          </div>{" "}
          <br /> <br />
          <div className="d-flex justify-content-between central">
            <div className="mb-3">
              <span>CENTRAL GOVERNMENT</span>
            </div>
            <div className="mb-3">
              <span>LOCAL GOVERNMENT</span>
            </div>
            <div className="mb-3">
              <span>EDUCATION</span>
            </div>
            <div className="mb-3">
              <span>HOUSING</span>
            </div>
            <div className="mb-3">
              <span>HEALTH AND CARE</span>
            </div>
          </div>{" "}
          <div className="civica-para">
            <p>
              Civica help organisations around the world to achieve better
              outcomes for people and communities.
            </p>
            <p>
              2.5 million professionals use Civica applications globally to
              streamline service delivery, support vital services for 90 million
              people and administer £150 billion of funds.
            </p>
            <p>
              Civica's software supports new ways of working, making the most of
              cloud technology to keep teams agile and productive. This has been
              particularly important in helping customers adapt to the
              challenges of COVID-19.
            </p>
            <p>
              Civica believe that communities deserve the best possible
              experience at every contact and they design the services so you
              can meet their needs
            </p>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="d-flex justify-content-center">
            <img src="Assets/Group 4777.png" alt="not found " style={{width:"150px",height:"13px"}}  className="img-fluid"/>
            
          </div>{" "}
          <br />
          <div className="d-flex justify-content-between central">
            <div>
              <span className="off-partner">OFFICIAL PARTNER</span> <br />
              <img src="Assets/ZIMO B.png" className='img-fluid' style={{width:"50px"}}  alt="zimo" />
            </div>
            <div>
              <span className="off-partner">800</span> <br />
              <span className="local">LOCAL COUNCILS</span>
            </div>
            <div>
              <span className="off-partner">40</span> <br />
              <span className="local">GOVERNMENT & DEPARTMENT AGENCIES</span>
            </div>
            <div>
              <span className="off-partner">500</span> <br />
              <span className="local">HEALTH & SOCIAL CARE PROVIDERS</span>
            </div>
            <div>
              <span className="off-partner">300</span> <br />
              <span className="local">HOUSING PROVIDERS</span>
            </div>
            <div>
              <span className="off-partner">130</span> <br />
              <span className="local">POLICE & FIRE SERVICE</span>
            </div>
            <div>
              <span className="off-partner">1600</span> <br />
              <span className="local">SCHOOLS & COLLEGES</span>
            </div>
          </div>
          <div className="civica-para2">
            <p>
              Civica software sustains and enhances public services worldwide.
              It’s backed by 30 years of experience and the expertise of people,
              many of whom have worked in the public sector. Civica focus on
              improving outcomes and building an international business that
              continues to deliver for communities globally.
            </p>
            <p>
              With operations in the UK and Ireland, Australia, New Zealand,
              India, Singapore, and the USA, Civica is one of the UK’s largest
              software companies. Employing around 6,000 people, and are
              recognised for their culture, which has earned them Investors in
              People ‘Gold’ standard in the UK.
            </p>
            <p>
              Civica is recognised globally and works (sector) with Local
              Government, Central Government UK. The Health and Care, Housing,
              and Education. .
            </p>
            <p>
              Civica provide multiple services which include, Cloud and Digital
              Services, Data, Analytics & Insights, Financial Management &
              Payments, Governance Risk & Compliance, Infrastructure and many
              more
            </p>
          </div>
        </div>
        <div className="row">
          <div>
            <h5>SOFTWARE AND SERVICES</h5>
          </div>
          <br />
          <div className="col-md-6">
            <div className="d-flex justify-content-between software mt-5">
              <div>
                <span>SOFTWARE USED BY</span> <br />
                <span className="million">2.5M</span> <br />
                <span>PUBLIC SERVICE PROFESSIONALS</span>
              </div>
              <div>
                <span>SUPPORTING PUBLIC SERVICES</span> <br />
                <span className="million">90M</span> <br />
                <span>PEOPLE</span>
              </div>
              <div>
                <span>WITH</span> <br />
                <span className="million">30 YEARS</span> <br />
                <span>PROVEN EXPERTISE</span>
              </div>

            </div>
          </div>
          <div className="col-md-6">
            <img src="Assets/Path 27330.png"className="img-fluid" alt="not found" />
          </div>

        </div>
      </div>
    </div>
  );
}

export default Official;
