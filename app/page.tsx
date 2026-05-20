import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import {
  Settings,
  Bell,
  Search,
  Moon,
  Sun,
  CreditCard,
  User,
  Mail,
  GitBranch,
} from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 p-4 sm:p-8 max-w-4xl mx-auto w-full gap-6">
      {/* Header */}
      <header className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Avatar size="lg">
            <AvatarFallback>VA</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-xl font-heading font-semibold">Vibe App</h1>
            <p className="text-sm text-muted-foreground">shadcn/ui components demo</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Bell className="size-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="size-5" />
          </Button>
        </div>
      </header>

      <Separator />

      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Total Users</CardTitle>
            <CardAction>
              <User className="size-4 text-muted-foreground" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold font-heading">12,483</p>
            <Badge variant="secondary" className="mt-1">+12% this month</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Revenue</CardTitle>
            <CardAction>
              <CreditCard className="size-4 text-muted-foreground" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold font-heading">$8,240</p>
            <Badge variant="secondary" className="mt-1">+8% this month</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-sm text-muted-foreground">Messages</CardTitle>
            <CardAction>
              <Mail className="size-4 text-muted-foreground" />
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-semibold font-heading">347</p>
            <Badge variant="destructive" className="mt-1">-3% this month</Badge>
          </CardContent>
        </Card>
      </div>

      {/* Tabs section */}
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="team">Team</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Project Overview</CardTitle>
              <CardDescription>Your project is on track — 85% complete.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-1.5">
                <div className="flex justify-between text-sm">
                  <span>Progress</span>
                  <span className="text-muted-foreground">85%</span>
                </div>
                <div className="h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full w-[85%] rounded-full bg-primary transition-all" />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge>Active</Badge>
                <Badge variant="secondary">Frontend</Badge>
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">shadcn/ui</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" size="sm" className="mr-2">View Details</Button>
              <Button size="sm">Update Status</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Team Members</CardTitle>
              <CardDescription>3 active members in this project.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {[
                { initials: "AK", name: "Alex Kim", role: "Lead Developer", active: true },
                { initials: "MR", name: "Maria Rossi", role: "Designer", active: true },
                { initials: "JP", name: "James Park", role: "PM", active: false },
              ].map((member) => (
                <div key={member.initials} className="flex items-center gap-3">
                  <Avatar size="sm">
                    <AvatarFallback>{member.initials}</AvatarFallback>
                    {member.active && <AvatarBadge />}
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{member.name}</p>
                    <p className="text-xs text-muted-foreground">{member.role}</p>
                  </div>
                  <Badge variant={member.active ? "secondary" : "outline"}>
                    {member.active ? "Online" : "Away"}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
              <CardDescription>Update your profile and preferences.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Display Name</label>
                <Input placeholder="John Doe" defaultValue="John Doe" />
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium">Email</label>
                <Input type="email" placeholder="john@example.com" defaultValue="john@example.com" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Appearance</p>
                  <p className="text-xs text-muted-foreground">Auto (follows system theme)</p>
                </div>
                <div className="flex items-center gap-1 bg-muted rounded-lg p-0.5">
                  <div className="flex items-center justify-center size-7 rounded-md bg-background shadow-sm">
                    <Sun className="size-3.5" />
                  </div>
                  <div className="flex items-center justify-center size-7 rounded-md">
                    <Moon className="size-3.5" />
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="justify-between">
              <Button variant="outline" size="sm">Cancel</Button>
              <Button size="sm">Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Theme indicator card */}
      <Card size="sm">
        <CardHeader>
          <CardTitle className="text-sm">Theme Info</CardTitle>
          <CardDescription>
            This app automatically switches between light and dark theme based on your system preference.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-1">
              <div className="flex gap-2 items-center">
                <div className="size-4 rounded border border-border bg-card" />
                <span>Card</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="size-4 rounded bg-primary" />
                <span>Primary</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="size-4 rounded bg-secondary" />
                <span>Secondary</span>
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex gap-2 items-center">
                <div className="size-4 rounded bg-muted" />
                <span>Muted</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="size-4 rounded bg-destructive" />
                <span>Destructive</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="size-4 rounded border border-border ring-1 ring-ring/50" />
                <span>Ring</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Footer */}
      <footer className="flex items-center justify-between text-xs text-muted-foreground pt-2">
        <span>Built with Next.js & shadcn/ui</span>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 hover:text-foreground transition-colors"
        >
          <GitBranch className="size-3.5" />
          GitHub
        </a>
      </footer>
    </div>
  );
}
