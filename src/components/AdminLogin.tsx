import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Bell, Users, MapPin } from "lucide-react";

const AdminLogin = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-primary" />
          <span className="text-xl font-semibold text-foreground">VigiLink</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground hidden md:block">About</span>
          <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            Sign In
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              {/* Logo */}
              <div className="flex items-center justify-center gap-2 mb-8">
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-2xl font-semibold text-card-foreground">VigiLink</span>
              </div>

              {/* Form */}
              <form className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="h-12 border-input bg-background text-foreground"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password" className="text-sm font-medium text-card-foreground">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    placeholder="password"
                    className="h-12 border-input bg-background text-foreground"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Sign In
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </main>

      {/* Features Section */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-12">
            Why Choose VigiLink?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Bell className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Alerts</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Receive instant notifications about safety concerns in your neighborhood.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Community Network</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Connect with neighbors and local law enforcement for a safer community.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Interactive Map</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                View and report incidents on an interactive neighborhood map.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Shield className="h-5 w-5 text-background" />
                <span className="font-semibold text-background">VigiLink</span>
              </div>
              <p className="text-sm text-background/70">
                Making neighborhoods safer, together.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-background mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>Features</li>
                <li>Pricing</li>
                <li>FAQ</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-background mb-3">Company</h4>
              <ul className="space-y-2 text-sm text-background/70">
                <li>About</li>
                <li>Blog</li>
                <li>Contact</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-background mb-3">Connect</h4>
              <div className="flex gap-3">
                <div className="w-6 h-6 text-background/70">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </div>
                <div className="w-6 h-6 text-background/70">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className="w-6 h-6 text-background/70">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-6 text-center">
            <p className="text-sm text-background/70">© 2025 VigiLink. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdminLogin;