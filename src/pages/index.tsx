import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>NKShop</title>
      </Head>
      <div
        style={{
          background: '#F1F5F4',
          border: 'none',
          borderRadius: '2px',
          boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
          width: '85vw',
          height: '85vh',
          marginTop: '5vh'
        }}
      >
        <iframe src="https://charts.mongodb.com/charts-embed-dom-v2/charts-static.min.js"></iframe>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var script = document.createElement('script');
                script.src = "https://charts.mongodb.com/charts-embed-dom-v2/charts-static.min.js";
                script.async = true;
                document.body.appendChild(script);
              })();
            `
          }}
        />
        <iframe
          src="https://charts.mongodb.com/charts-nk-shop-mxnju/embed/dashboards?id=648ecbae-8a37-4f09-87a3-1ae886b34fe5&theme=light&autoRefresh=true&maxDataAge=3600&showTitleAndDesc=false&scalingWidth=fixed&scalingHeight=fixed"
          style={{ width: '100%', height: '100%', border: 'none' }}
        ></iframe>
      </div>
    </>
  );
}
