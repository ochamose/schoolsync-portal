"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BookOpen,
  FileText,
  BarChart3,
  Calendar,
  UserCheck,
  Shield,
  User,
  Settings,
  GraduationCap,
  Users,
  Heart,
  UserPlus,
  Upload,
  CheckCircle2,
  Mail,
  Phone,
  MessageCircle,
  Menu,
  X,
  Check,
} from "lucide-react";

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <img
                src="https://ext.same-assets.com/817071270/224171673.png"
                alt="SchoolSync Logo"
                className="w-8 h-8"
              />
            </div>
            <span className="text-xl font-bold text-white">SchoolSync</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-white/90 hover:text-white transition-colors">
              Features
            </a>
            <a href="#roles" className="text-white/90 hover:text-white transition-colors">
              For Everyone
            </a>
            <a href="#about" className="text-white/90 hover:text-white transition-colors">
              About
            </a>
            <Button
              variant="outline"
              className="bg-white text-gray-800 hover:bg-white/90 border-0"
            >
              Login
            </Button>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg rounded-lg p-4 mt-2">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-white/90 hover:text-white transition-colors">
                Features
              </a>
              <a href="#roles" className="text-white/90 hover:text-white transition-colors">
                For Everyone
              </a>
              <a href="#about" className="text-white/90 hover:text-white transition-colors">
                About
              </a>
              <Button className="bg-white text-gray-800 hover:bg-white/90 w-full">
                Login
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section className="hero-gradient pt-24 pb-8 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Modern School Management Made Simple
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Streamline your school operations with our comprehensive SIS/LMS platform.
            Manage students, teachers, grades, attendance, and more - all in one place.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-gray-800 hover:bg-white/90 px-8 py-6 text-lg"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white/20 px-8 py-6 text-lg"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="mt-16 max-w-5xl mx-auto">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}

// Dashboard Preview Component
function DashboardPreview() {
  return (
    <div className="dashboard-preview rounded-2xl overflow-hidden shadow-2xl">
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#1a1b2e] border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-4 text-white/60 text-sm">SchoolSync Dashboard</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-white/10" />
          <div className="w-10 h-5 rounded-full bg-cyan-500/50" />
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="flex">
        {/* Sidebar */}
        <div className="hidden sm:flex flex-col gap-4 p-4 bg-[#1f2037] w-16">
          <div className="w-8 h-8 rounded-lg bg-violet-500/30 flex items-center justify-center">
            <div className="w-4 h-4 grid grid-cols-2 gap-0.5">
              <div className="bg-violet-400 rounded-sm" />
              <div className="bg-violet-400 rounded-sm" />
              <div className="bg-violet-400 rounded-sm" />
              <div className="bg-violet-400 rounded-sm" />
            </div>
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <User size={16} className="text-white/40" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white/40 rounded" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <BarChart3 size={16} className="text-white/40" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <Calendar size={16} className="text-white/40" />
          </div>
          <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
            <Settings size={16} className="text-white/40" />
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white font-semibold text-lg">Overview</h2>
            <div className="flex items-center gap-2">
              <span className="text-white/60 text-sm hidden sm:block">Nov 22, 2025</span>
              <span className="px-2 py-1 bg-green-500 text-white text-xs rounded-full font-medium">
                LIVE
              </span>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
            <div className="bg-[#2a2b4a] rounded-xl p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <User size={16} className="text-violet-400" />
                <span className="text-green-400 text-xs">+5.2%</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-cyan-400">1,250</div>
              <div className="text-white/50 text-xs uppercase">Students</div>
            </div>
            <div className="bg-[#2a2b4a] rounded-xl p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <Users size={16} className="text-violet-400" />
                <span className="text-green-400 text-xs">+2</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-violet-400">85</div>
              <div className="text-white/50 text-xs uppercase">Teachers</div>
            </div>
            <div className="bg-[#2a2b4a] rounded-xl p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <UserCheck size={16} className="text-violet-400" />
                <span className="text-green-400 text-xs">+1.3%</span>
              </div>
              <div className="text-xl sm:text-2xl font-bold text-amber-400">98%</div>
              <div className="text-white/50 text-xs uppercase">Attendance</div>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* Weekly Performance */}
            <div className="bg-[#2a2b4a] rounded-xl p-4">
              <div className="flex items-center justify-between mb-4">
                <span className="text-white/70 text-sm">Weekly Performance</span>
                <span className="text-green-400 text-sm">+12%</span>
              </div>
              <div className="flex items-end gap-2 h-24">
                {[40, 55, 60, 50, 70, 85, 90].map((height, i) => (
                  <div
                    key={i}
                    className="flex-1 bg-violet-500 rounded-t"
                    style={{ height: `${height}%` }}
                  />
                ))}
              </div>
              <div className="flex justify-between mt-2 text-white/40 text-xs">
                <span>Mon</span>
                <span>Tue</span>
                <span>Wed</span>
                <span>Thu</span>
                <span>Fri</span>
                <span>Sat</span>
                <span>Sun</span>
              </div>
            </div>

            {/* Grade Distribution */}
            <div className="bg-[#2a2b4a] rounded-xl p-4">
              <div className="text-white/70 text-sm mb-4">Grade Distribution</div>
              <div className="space-y-3">
                {[
                  { grade: "A", width: "85%", color: "bg-green-500" },
                  { grade: "B", width: "70%", color: "bg-violet-500" },
                  { grade: "C", width: "55%", color: "bg-amber-500" },
                  { grade: "D", width: "25%", color: "bg-red-500" },
                ].map((item) => (
                  <div key={item.grade} className="flex items-center gap-2">
                    <span className="text-white/60 text-sm w-4">{item.grade}</span>
                    <div className="flex-1 bg-white/10 rounded-full h-2">
                      <div
                        className={`${item.color} rounded-full h-2`}
                        style={{ width: item.width }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Class Table */}
          <div className="bg-[#2a2b4a] rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 gap-4 p-4 text-white/50 text-sm border-b border-white/10">
              <span>Class</span>
              <span className="text-center">Students</span>
              <span className="text-right">Status</span>
            </div>
            {[
              { name: "Mathematics 101", students: 32, status: "Active", color: "bg-green-500" },
              { name: "Physics Advanced", students: 28, status: "In Session", color: "bg-violet-500" },
              { name: "English Literature", students: 35, status: "Pending", color: "bg-amber-500" },
            ].map((cls) => (
              <div
                key={cls.name}
                className="grid grid-cols-3 gap-4 p-4 text-sm border-b border-white/5 last:border-0"
              >
                <span className="text-white/80 flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${cls.color}`} />
                  <span className="truncate">{cls.name}</span>
                </span>
                <span className="text-white/60 text-center">{cls.students}</span>
                <span className="text-right">
                  <span className={`inline-flex items-center gap-1 text-xs ${cls.color === "bg-green-500" ? "text-green-400" : cls.color === "bg-violet-500" ? "text-violet-400" : "text-amber-400"}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${cls.color}`} />
                    {cls.status}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Features Section
function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: "Academic Management",
      description: "Manage grades, classrooms, subjects, and terms with ease. Track academic progress in real-time.",
      gradient: "icon-pink",
    },
    {
      icon: FileText,
      title: "Assignments & Exams",
      description: "Create assignments, schedule exams, and grade submissions. Support for file uploads and feedback.",
      gradient: "icon-magenta",
    },
    {
      icon: BarChart3,
      title: "Gradebook & Reports",
      description: "Comprehensive gradebook with automatic GPA calculation. Generate detailed report cards.",
      gradient: "icon-orange",
    },
    {
      icon: Calendar,
      title: "Schedule Management",
      description: "Create and manage class timetables. Handle room assignments and conflict detection.",
      gradient: "icon-purple",
    },
    {
      icon: UserCheck,
      title: "Attendance Tracking",
      description: "Mark and track student attendance. Generate reports and notify parents automatically.",
      gradient: "icon-cyan",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Two-factor authentication, role-based access, and comprehensive audit logging.",
      gradient: "icon-purple",
    },
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Everything You Need
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Comprehensive tools to manage every aspect of your educational institution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex flex-col items-center text-center">
                  <div className={`w-16 h-16 rounded-2xl ${feature.gradient} flex items-center justify-center mb-4`}>
                    <feature.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Roles Section
function RolesSection() {
  const roles = [
    {
      icon: User,
      title: "School Owner",
      description: "Full system control & analytics",
    },
    {
      icon: Settings,
      title: "Administrator",
      description: "Manage users, classes & settings",
    },
    {
      icon: GraduationCap,
      title: "Teacher",
      description: "Assignments, grading & attendance",
    },
    {
      icon: Users,
      title: "Student",
      description: "View grades, submit work & schedule",
    },
    {
      icon: Heart,
      title: "Guardian",
      description: "Monitor child's progress",
    },
  ];

  return (
    <section id="roles" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Built For Everyone
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tailored experiences for every member of your school community
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {roles.map((role) => (
            <Card key={role.title} className="border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <role.icon size={24} className="text-gray-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{role.title}</h3>
                <p className="text-gray-500 text-sm">{role.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Steps Section
function StepsSection() {
  const steps = [
    {
      number: 1,
      icon: UserPlus,
      title: "Create Your Account",
      description: "Sign up and tell us about your school. We'll set up your personalized dashboard.",
    },
    {
      number: 2,
      icon: Upload,
      title: "Import Your Data",
      description: "Upload students, teachers, and classes via CSV or enter them manually.",
    },
    {
      number: 3,
      icon: CheckCircle2,
      title: "Start Managing",
      description: "You're ready! Track attendance, manage grades, and streamline operations.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Started in 3 Simple Steps
          </h2>
          <p className="text-gray-600 text-lg">
            From signup to fully operational in less than a day
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="border-0 shadow-sm">
                <CardContent className="p-8 text-center relative">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-violet-500 text-white flex items-center justify-center font-semibold text-sm">
                    {step.number}
                  </div>
                  <div className="mt-4 mb-4">
                    <step.icon size={40} className="text-gray-400 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </CardContent>
              </Card>
              {index < 2 && (
                <div className="hidden md:block absolute top-1/2 -right-4 text-gray-300">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "SchoolSync transformed how we manage our school. Attendance tracking used to take hours, now it's done in minutes. The parent portal has improved communication tremendously.",
      name: "Tendai Moyo",
      role: "Principal, Harare Academy",
      initials: "TM",
      bgColor: "bg-violet-100",
      textColor: "text-violet-600",
    },
    {
      quote: "As a teacher, I love how easy it is to enter grades and create assignments. The gradebook automatically calculates everything. It's saved me countless hours every term.",
      name: "Chipo Ndlovu",
      role: "Senior Teacher, Bulawayo High",
      initials: "CN",
      bgColor: "bg-teal-100",
      textColor: "text-teal-600",
    },
    {
      quote: "The support team is incredible. They helped us migrate from paper records to digital in just two weeks. Our admin costs have dropped by 40% since implementing SchoolSync.",
      name: "Peter Mwangi",
      role: "School Owner, Nairobi Prep",
      initials: "PM",
      bgColor: "bg-cyan-100",
      textColor: "text-cyan-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            What Schools Are Saying
          </h2>
          <p className="text-gray-600 text-lg">
            Join hundreds of satisfied institutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border border-gray-100 shadow-sm">
              <CardContent className="p-6">
                <div className="text-violet-300 text-4xl mb-4">"</div>
                <p className="text-gray-600 mb-6 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${testimonial.bgColor} ${testimonial.textColor} flex items-center justify-center font-semibold text-sm`}>
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { value: "500+", label: "Schools Trust Us" },
    { value: "50K+", label: "Active Students" },
    { value: "99.9%", label: "Uptime" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <section className="py-20 stats-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function PricingSection() {
  const plans = [
    {
      name: "Starter",
      price: "$49",
      description: "Perfect for small schools",
      features: [
        "Up to 200 students",
        "Up to 20 teachers",
        "Gradebook & Attendance",
        "Basic Reports",
        "Email Support",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "$149",
      description: "For growing institutions",
      features: [
        "Up to 1,000 students",
        "Unlimited teachers",
        "All Starter features",
        "Advanced Analytics",
        "Two-Factor Auth",
        "Priority Support",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "$399",
      description: "For large school districts",
      features: [
        "Unlimited students",
        "Multi-school support",
        "All Professional features",
        "Custom Integrations",
        "Dedicated Account Manager",
        "24/7 Phone Support",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-600 text-lg">
            Choose the plan that fits your school's needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl ${plan.popular ? "pricing-popular text-white" : "bg-white border border-gray-200"} p-8`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-gray-900 px-4 py-1 rounded-full text-xs font-semibold">
                  MOST POPULAR
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.name}
                </h3>
                <div className={`text-4xl font-bold mb-1 ${plan.popular ? "text-white" : "text-gray-900"}`}>
                  {plan.price}<span className="text-lg font-normal">/month</span>
                </div>
                <p className={plan.popular ? "text-white/80" : "text-gray-500"}>{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check size={18} className={plan.popular ? "text-cyan-300" : "text-violet-500"} />
                    <span className={plan.popular ? "text-white/90" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${plan.popular ? "bg-white text-gray-900 hover:bg-white/90" : "bg-white border-2 border-violet-500 text-violet-500 hover:bg-violet-50"}`}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// FAQ Section
function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to set up SchoolSync?",
      answer: "Most schools are up and running within 24-48 hours. Our onboarding team helps you import existing data and trains your staff on using the system.",
    },
    {
      question: "Can I import data from my current system?",
      answer: "Yes! We support CSV imports for students, teachers, classes, and grades. Our team can also help with custom migrations from other school management systems.",
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We use bank-level encryption, two-factor authentication, and regular backups. Your data is stored securely and never shared with third parties.",
    },
    {
      question: "Do you offer training for staff?",
      answer: "Yes, we provide free onboarding training for all plans. Professional and Enterprise plans include ongoing training sessions and dedicated support.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, bank transfers, and mobile money (EcoCash, OneMoney) for African schools. Annual billing discounts are available.",
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, there are no long-term contracts. You can cancel your subscription at any time. We'll even help you export your data if you decide to leave.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Got questions? We've got answers
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-lg px-6 border border-gray-100"
            >
              <AccordionTrigger className="text-left font-medium text-gray-900 hover:no-underline py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section className="py-20 footer-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            <p className="text-white/70 mb-8">
              Have questions? Our team is here to help you find the right solution for your school.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Email Us</div>
                  <div className="text-white/60">admin@schoolsyncportal.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">Call Us</div>
                  <div className="text-white/60">+263 77 197 5516</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg whatsapp-btn flex items-center justify-center">
                  <MessageCircle size={20} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-medium">WhatsApp</div>
                  <div className="text-white/60">+263 77 197 5516</div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="text-white/60 text-sm mb-3">Serving schools in:</div>
              <div className="flex gap-2">
                {["ZW", "KE", "ZA", "NG", "GH"].map((country) => (
                  <div
                    key={country}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white text-xs font-medium"
                  >
                    {country}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-2xl p-8">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name *
                  </label>
                  <Input placeholder="" className="bg-gray-50 border-gray-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name *
                  </label>
                  <Input placeholder="" className="bg-gray-50 border-gray-200" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <Input type="email" placeholder="" className="bg-gray-50 border-gray-200" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <Input placeholder="+263 77 123 4567" className="bg-gray-50 border-gray-200" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  School Name *
                </label>
                <Input placeholder="" className="bg-gray-50 border-gray-200" />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea
                  placeholder="Tell us about your school and how we can help..."
                  rows={4}
                  className="bg-gray-50 border-gray-200"
                />
              </div>

              <Button className="w-full pricing-popular text-white py-6">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-[#1a1b36] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">SchoolSync</h3>
            <p className="text-white/60 text-sm">
              A comprehensive School Information System and Learning Management System designed to simplify school administration and enhance the educational experience.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Features</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-white/60 hover:text-white text-sm">Academic Management</a></li>
              <li><a href="#features" className="text-white/60 hover:text-white text-sm">Gradebook</a></li>
              <li><a href="#features" className="text-white/60 hover:text-white text-sm">Attendance</a></li>
              <li><a href="#features" className="text-white/60 hover:text-white text-sm">Scheduling</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">For Users</h3>
            <ul className="space-y-2">
              <li><a href="#roles" className="text-white/60 hover:text-white text-sm">Administrators</a></li>
              <li><a href="#roles" className="text-white/60 hover:text-white text-sm">Teachers</a></li>
              <li><a href="#roles" className="text-white/60 hover:text-white text-sm">Students</a></li>
              <li><a href="#roles" className="text-white/60 hover:text-white text-sm">Parents</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Access</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/60 hover:text-white text-sm">Login</a></li>
              <li><a href="#" className="text-white/60 hover:text-white text-sm">Reset Password</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/60 text-sm">
            2025 SchoolSync. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// WhatsApp Button
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/263771975516"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 w-14 h-14 whatsapp-btn rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
    >
      <MessageCircle size={28} className="text-white" />
    </a>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <RolesSection />
      <StepsSection />
      <TestimonialsSection />
      <StatsSection />
      <PricingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
