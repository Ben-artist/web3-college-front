import {
  ArrowRight,
  BookOpen,
  Globe,
  Shield,
  Star,
  Trophy,
  Users,
  Zap,
} from 'lucide-react'
import { Navigation } from '@/components/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      {/* Hero Section */}
      <section className="container py-12 text-center">
        <div className="mx-auto max-w-4xl space-y-8">
          <Badge variant="secondary" className="px-4 py-2">
            <Zap className="mr-2 h-4 w-4" />
            Next-Gen Social Learning
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Learn Web3, <span className="text-primary">Earn Together</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the decentralized education revolution. Learn blockchain, DeFi,
            and Web3 technologies while earning rewards and building your
            reputation in the community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Start Learning
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Explore Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container py-24">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tight">
            Why Choose Web3 College?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience the future of education with blockchain-powered learning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <CardTitle>Interactive Learning</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Hands-on courses with real-world projects, smart contracts, and
                DeFi protocols.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Users className="h-6 w-6 text-primary" />
                <CardTitle>Community Driven</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Learn from peers, share knowledge, and build lasting connections
                in the Web3 space.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Trophy className="h-6 w-6 text-primary" />
                <CardTitle>Earn Rewards</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Complete courses and contribute to earn tokens, NFTs, and unlock
                exclusive opportunities.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Shield className="h-6 w-6 text-primary" />
                <CardTitle>Decentralized</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Your achievements are recorded on-chain, creating a permanent,
                verifiable learning record.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Globe className="h-6 w-6 text-primary" />
                <CardTitle>Global Access</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Access world-class education from anywhere, anytime, with no
                geographical barriers.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Star className="h-6 w-6 text-primary" />
                <CardTitle>Expert Instructors</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">
                Learn from industry experts, successful entrepreneurs, and
                leading blockchain developers.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-24">
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Start Your Web3 Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of learners already building the future of
              decentralized education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                View Pricing
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/50">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <BookOpen className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Web3 College</span>
              </div>
              <p className="text-sm text-muted-foreground">
                The future of decentralized education is here.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Learn</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Blockchain Basics</li>
                <li>DeFi Protocols</li>
                <li>Smart Contracts</li>
                <li>NFT Development</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Community</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Discord</li>
                <li>Twitter</li>
                <li>Telegram</li>
                <li>GitHub</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-semibold">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Web3 College. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
