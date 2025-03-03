import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { Navigation } from "@/components/ui/navigation";
import { Footer } from "@/components/ui/footer";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import Services from "@/pages/services";
import Gallery from "@/pages/gallery";
import Contact from "@/pages/contact";
import Pricing from "@/pages/pricing";
import Blog from "@/pages/blog";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/:id" component={Blog} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Navigation />
      <main className="min-h-screen">
        <Router />
      </main>
      <Footer />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;