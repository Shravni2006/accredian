class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-blue-600 text-white rounded-md"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  try {
    return (
      <div className="flex flex-col min-h-screen overflow-x-hidden" data-name="app" data-file="app.js">
        <Header />
        <main className="flex-grow pt-24">
          <Hero onEnquire={openModal} />
          <TrackRecord />
          <Partnerships />
          <AccredianEdge />
          <DomainExpertise />
          <CourseSegmentation />
          <WhoShouldJoin />
          <CATFramework />
          <DeliveryResults />
          <FAQ onEnquire={openModal} />
          <Testimonials />
          <BottomCTA onEnquire={openModal} />
        </main>
        <Footer onEnquire={openModal} />
        
        {isModalOpen && <EnquireModal onClose={closeModal} />}
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);