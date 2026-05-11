import { useState, useEffect } from "react";
import {
	Bot,
	Zap,
	Shield,
	Target,
	Users,
	TrendingUp,
	Star,
	Play,
	Check,
	ArrowRight,
	MessageCircle,
	BarChart3,
	Globe,
	Rocket,
	Menu,
	X,
	ExternalLink,
	ChevronDown,
	Clock,
	Brain,
	Network,
	Megaphone,
	ChartBar,
	Settings,
	Mail,
	Bell,
	Sparkles,
	Code,
	Database,
	MonitorSpeaker,
	Layers,
	Lightbulb,
	Cpu,
	Activity,
	Radar,
} from "lucide-react";

function App() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeFeature, setActiveFeature] = useState(0);
	const [activeTestimonial, setActiveTestimonial] = useState(0);
	const [email, setEmail] = useState("");

	const features = [
		{
			icon: Bot,
			title: "AI-Powered Content Generation",
			description: "Advanced AI creates authentic, platform-specific content that resonates with your community.",
			details:
				"Our sophisticated neural networks analyze trending topics, community sentiment, and successful engagement patterns to generate content that feels genuinely human. The AI understands Web3 culture, crypto terminology, and platform-specific nuances - from Twitter's viral threads to Discord's community banter and Telegram's announcement styles.",
			highlights: [
				"Context-aware content generation",
				"Web3 culture understanding",
				"Platform-specific optimization",
				"Trend analysis integration",
			],
		},
		{
			icon: Target,
			title: "Smart Multi-Platform Coordination",
			description: "Orchestrate synchronized campaigns across Twitter, Telegram, and Discord with perfect timing.",
			details:
				"Each platform receives carefully crafted content optimized for its unique audience and format. Twitter gets engaging threads and viral hooks, Discord receives community-focused discussions, and Telegram delivers clear, actionable announcements. Our system ensures consistent messaging while adapting tone and format for maximum platform-specific engagement.",
			highlights: [
				"Synchronized campaign deployment",
				"Platform-native content formats",
				"Optimal timing algorithms",
				"Cross-platform consistency",
			],
		},
		{
			icon: Zap,
			title: "24/7 Automated Engagement",
			description: "Maintain constant community presence with intelligent automation that never sleeps.",
			details:
				"Smart scheduling ensures your content reaches audiences at peak engagement times across different time zones. Automated response systems handle common inquiries while escalating complex conversations to human moderators. The system learns your community's activity patterns and adapts posting frequency to maximize visibility without overwhelming your audience.",
			highlights: [
				"Global timezone optimization",
				"Intelligent response handling",
				"Adaptive posting frequency",
				"Community behavior learning",
			],
		},
		{
			icon: Shield,
			title: "Compliance & Safety First",
			description: "Built-in safeguards ensure your campaigns stay within platform guidelines and community standards.",
			details:
				"Advanced content filtering prevents violations before they happen by understanding each platform's terms of service and community guidelines. Real-time monitoring tracks reputation metrics and adjusts strategies to maintain positive community standing. Our AI recognizes sensitive topics and automatically moderates content to protect your brand integrity.",
			highlights: [
				"Proactive violation prevention",
				"Real-time reputation monitoring",
				"Automated content moderation",
				"Brand safety protection",
			],
		},
	];

	const howItWorks = [
		{
			step: "01",
			icon: Settings,
			title: "Connect Your Platforms",
			description:
				"Link your Twitter accounts, Telegram channels, and Discord servers to MoonShill's unified dashboard.",
		},
		{
			step: "02",
			icon: Brain,
			title: "Train Your AI",
			description:
				"Our AI learns your project's voice, key messages, and community tone by analyzing your existing content and brand guidelines.",
		},
		{
			step: "03",
			icon: Megaphone,
			title: "Launch Campaigns",
			description:
				"Create targeted campaigns with specific goals, audiences, and messaging strategies across all your connected platforms.",
		},
		{
			step: "04",
			icon: ChartBar,
			title: "Track & Optimize",
			description:
				"Monitor engagement metrics, community growth, and campaign performance with detailed analytics and AI-powered insights.",
		},
	];

	const useCases = [
		{
			icon: Rocket,
			title: "Token Launch Campaigns",
			description: "Build anticipation and drive awareness for your token launch across all major platforms",
			benefits: ["Multi-platform coordination", "Hype building", "Community engagement", "Real-time updates"],
		},
		{
			icon: Users,
			title: "Community Growth",
			description: "Organically grow your Web3 community with authentic, engaging content and strategic outreach",
			benefits: ["Targeted user acquisition", "Engagement optimization", "Community nurturing", "Retention strategies"],
		},
		{
			icon: TrendingUp,
			title: "Market Making",
			description: "Create buzz and maintain momentum for your project during key market moments",
			benefits: ["Trend amplification", "Sentiment management", "Volume coordination", "Market positioning"],
		},
		{
			icon: Network,
			title: "Partnership Announcements",
			description: "Maximize the impact of strategic partnerships and collaborations across your network",
			benefits: [
				"Cross-platform announcements",
				"Partner amplification",
				"Audience cross-pollination",
				"Brand visibility",
			],
		},
	];

	const supportedPlatforms = [
		{ name: "Twitter/X", icon: "🐦", status: "active" },
		{ name: "Telegram", icon: "📱", status: "active" },
	];

	const comingSoonPlatforms = [
		{ name: "Discord", icon: "💬", status: "coming-soon" },
		{ name: "Reddit", icon: "🤖", status: "coming-soon" },
		{ name: "BitcoinTalk", icon: "₿", status: "coming-soon" },
		{ name: "CoinTelegraph", icon: "📰", status: "coming-soon" },
		{ name: "Medium", icon: "📝", status: "coming-soon" },
		{ name: "YouTube", icon: "📺", status: "coming-soon" },
		{ name: "LinkedIn", icon: "💼", status: "coming-soon" },
	];

	const testimonials = [
		{
			content:
				"This AI actually gets Web3 culture. It's like having a marketing team that never sleeps and understands crypto twitter perfectly.",
			rating: 5,
		},
		{
			content:
				"Finally, a tool that doesn't make my project sound like a generic corporate announcement. The engagement went through the roof!",
			rating: 5,
		},
		{
			content:
				"The multi-platform coordination is insane. Same message, perfect timing, different tone for each platform. Pure genius.",
			rating: 5,
		},
		{
			content: "Saved us 20+ hours per week while doubling our community growth. This is the future of Web3 marketing.",
			rating: 5,
		},
		{
			content:
				"The AI understands the difference between shilling and authentic engagement. Our community actually loves the content now.",
			rating: 5,
		},
		{
			content: "Best investment we made for our token launch. The hype was real and the community felt genuine.",
			rating: 5,
		},
	];

	const keyBenefits = [
		{
			icon: Lightbulb,
			title: "Intelligent Automation",
			description: "AI that actually understands Web3 culture and crypto communities",
		},
		{
			icon: Cpu,
			title: "Multi-Platform Sync",
			description: "Coordinated campaigns across Twitter, Telegram, and Discord",
		},
		{
			icon: Activity,
			title: "Real-Time Analytics",
			description: "Track engagement and optimize performance automatically",
		},
		{
			icon: Radar,
			title: "Community Growth",
			description: "Authentic engagement that builds lasting community relationships",
		},
	];

	const handleWaitlistSignup = (e) => {
		e.preventDefault();
		// Handle waitlist signup logic here
		console.log("Waitlist signup:", email);
		setEmail("");
		// You could integrate with your backend or email service here
	};

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveFeature((prev) => (prev + 1) % features.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
			{/* Navigation */}
			<nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<motion.div
							className="flex items-center space-x-2"
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
						>
							<div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
								<Rocket className="w-5 h-5 text-white" />
							</div>
							<span className="text-xl font-bold text-white">MoonShill</span>
						</motion.div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex items-center space-x-8">
							<a href="#features" className="text-slate-300 hover:text-white transition-colors">
								Features
							</a>
							<a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
								How It Works
							</a>
							<a href="#use-cases" className="text-slate-300 hover:text-white transition-colors">
								Use Cases
							</a>
							<a href="#platforms" className="text-slate-300 hover:text-white transition-colors">
								Platforms
							</a>
							<button className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-lg transition-colors">
								Join Waitlist
							</button>
						</div>

						{/* Mobile menu button */}
						<div className="md:hidden">
							<button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-300 hover:text-white">
								{isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
							</button>
						</div>
					</div>

					{/* Mobile Navigation */}
					{isMenuOpen && (
						<div className="md:hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
							<div className="absolute top-full left-0 right-0 mt-2 mx-4 bg-slate-800/95 backdrop-blur-lg border border-slate-700/50 rounded-2xl shadow-2xl shadow-black/20 overflow-hidden">
								<div className="py-6">
									<a
										href="#features"
										className="block px-6 py-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 border-b border-slate-700/30 last:border-b-0"
										onClick={() => setIsMenuOpen(false)}
									>
										<div className="flex items-center space-x-3">
											<div className="w-2 h-2 bg-primary/60 rounded-full"></div>
											<span className="font-medium">Features</span>
										</div>
									</a>
									<a
										href="#how-it-works"
										className="block px-6 py-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 border-b border-slate-700/30 last:border-b-0"
										onClick={() => setIsMenuOpen(false)}
									>
										<div className="flex items-center space-x-3">
											<div className="w-2 h-2 bg-primary/60 rounded-full"></div>
											<span className="font-medium">How It Works</span>
										</div>
									</a>
									<a
										href="#use-cases"
										className="block px-6 py-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 border-b border-slate-700/30 last:border-b-0"
										onClick={() => setIsMenuOpen(false)}
									>
										<div className="flex items-center space-x-3">
											<div className="w-2 h-2 bg-primary/60 rounded-full"></div>
											<span className="font-medium">Use Cases</span>
										</div>
									</a>
									<a
										href="#platforms"
										className="block px-6 py-4 text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-200 border-b border-slate-700/30 last:border-b-0"
										onClick={() => setIsMenuOpen(false)}
									>
										<div className="flex items-center space-x-3">
											<div className="w-2 h-2 bg-primary/60 rounded-full"></div>
											<span className="font-medium">Platforms</span>
										</div>
									</a>
									<div className="px-6 pt-4">
										<button
											className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-dark hover:to-primary text-white py-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200 shadow-lg hover:shadow-xl"
											onClick={() => setIsMenuOpen(false)}
										>
											<Bell className="w-5 h-5" />
											<span>Join Waitlist</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</nav>

			{/* Hero Section */}
			<section className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="text-center"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div
							className="inline-flex items-center px-3 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-8 text-sm sm:text-base"
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							transition={{ delay: 0.2 }}
						>
							<Sparkles className="w-4 h-4 mr-2 flex-shrink-0" />
							<span className="text-center">Coming Soon - AI-Powered Multi-Platform Engine</span>
						</div>

						<motion.h1
							className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight px-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
						>
							<span className="block sm:inline">Automate the Hype.</span>
							<br className="hidden sm:block" />
							<span className="block sm:inline">
								<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary-light">
									Scale the
								</span>{" "}
								<span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">🌕</span>
							</span>
						</motion.h1>

						<motion.p
							className="text-lg sm:text-xl text-slate-300 max-w-4xl mx-auto mb-8 sm:mb-12 px-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.4 }}
						>
							The first AI-powered multi-platform shilling engine designed specifically for Web3 communities. Transform
							your community engagement with intelligent content generation and strategic posting across Twitter,
							Telegram, and Discord.
						</motion.p>

						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 sm:mb-16 px-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<motion.button
								className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center group"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Join the Waitlist
								<Bell className="w-5 h-5 ml-2 group-hover:animate-bounce" />
							</motion.button>
							<motion.button
								className="w-full sm:w-auto border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Play className="w-5 h-5 mr-2" />
								Watch Demo
							</motion.button>
						</motion.div>

						{/* Key Benefits */}
						<motion.div
							className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 px-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							{keyBenefits.map((benefit, index) => (
								<motion.div
									key={index}
									className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-4 sm:p-6 text-center hover:border-primary/30 transition-colors"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.7 + index * 0.1 }}
									whileHover={{ scale: 1.05, borderColor: "rgba(0, 122, 255, 0.5)" }}
								>
									<div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
										<benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
									</div>
									<h3 className="text-white font-semibold mb-2 text-sm sm:text-base">{benefit.title}</h3>
									<p className="text-slate-400 text-xs sm:text-sm">{benefit.description}</p>
								</motion.div>
							))}
						</motion.div>
					</motion.div>
				</div>
			</section>

			{/* Features Section */}
			<section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl font-bold text-white mb-4">Powerful Features for Web3 Growth</h2>
						<p className="text-xl text-slate-300 max-w-2xl mx-auto">
							Click on any feature below to explore how MoonShill revolutionizes your community engagement
						</p>
					</motion.div>

					<div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
						{/* Feature Cards */}
						<div className="space-y-4 order-2 lg:order-1">
							{features.map((feature, index) => (
								<motion.div
									key={index}
									className={`p-4 sm:p-6 rounded-xl border transition-all cursor-pointer ${
										activeFeature === index
											? "bg-gradient-to-r from-primary/20 to-primary-light/10 border-primary/60 shadow-lg shadow-primary/20"
											: "bg-slate-800/50 border-slate-700 hover:border-slate-600 hover:bg-slate-800/70"
									}`}
									onClick={() => setActiveFeature(index)}
									whileHover={{ scale: 1.02 }}
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
								>
									<div className="flex items-start space-x-3 sm:space-x-4">
										<div
											className={`p-2 sm:p-3 rounded-lg transition-all flex-shrink-0 ${
												activeFeature === index ? "bg-primary text-white shadow-lg" : "bg-slate-700 text-slate-300"
											}`}
										>
											<feature.icon className="w-5 h-5 sm:w-6 sm:h-6" />
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-start justify-between">
												<h3 className="text-lg sm:text-xl font-semibold text-white mb-2 pr-2">{feature.title}</h3>
												<ChevronDown
													className={`w-5 h-5 text-slate-400 transition-transform flex-shrink-0 ${
														activeFeature === index ? "rotate-180 text-primary" : ""
													}`}
												/>
											</div>
											<p className="text-slate-300 text-sm sm:text-base">{feature.description}</p>
											{activeFeature === index && (
												<motion.div
													initial={{ opacity: 0, height: 0 }}
													animate={{ opacity: 1, height: "auto" }}
													className="mt-4 pt-4 border-t border-primary/20"
												>
													<div className="grid grid-cols-1 gap-2">
														{feature.highlights.map((highlight, highlightIndex) => (
															<div key={highlightIndex} className="flex items-center space-x-2">
																<Check className="w-4 h-4 text-green-400 flex-shrink-0" />
																<span className="text-slate-300 text-sm">{highlight}</span>
															</div>
														))}
													</div>
												</motion.div>
											)}
										</div>
									</div>
								</motion.div>
							))}
						</div>

						{/* Feature Details - Enhanced */}
						<motion.div
							className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-primary/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-primary/10 backdrop-blur-sm order-1 lg:order-2"
							key={activeFeature}
							initial={{ opacity: 0, scale: 0.95, x: 20 }}
							animate={{ opacity: 1, scale: 1, x: 0 }}
							transition={{ duration: 0.4 }}
						>
							<div className="flex items-start space-x-3 sm:space-x-4 mb-6">
								<div className="p-3 sm:p-4 bg-gradient-to-br from-primary to-primary-light rounded-xl shadow-lg flex-shrink-0">
									{(() => {
										const IconComponent = features[activeFeature].icon;
										return <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />;
									})()}
								</div>
								<div className="min-w-0">
									<h3 className="text-xl sm:text-2xl font-bold text-white break-words">
										{features[activeFeature].title}
									</h3>
									<p className="text-primary font-medium text-sm sm:text-base">Advanced AI Technology</p>
								</div>
							</div>

							<div className="space-y-4">
								<p className="text-slate-300 text-base sm:text-lg leading-relaxed">{features[activeFeature].details}</p>

								<div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
									<h4 className="text-white font-semibold mb-3 flex items-center text-sm sm:text-base">
										<Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary mr-2 flex-shrink-0" />
										Key Capabilities
									</h4>
									<div className="grid grid-cols-1 gap-3">
										{features[activeFeature].highlights.map((highlight, index) => (
											<div key={index} className="flex items-center space-x-2">
												<div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
												<span className="text-slate-300 text-sm">{highlight}</span>
											</div>
										))}
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			{/* How It Works Section */}
			<section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl font-bold text-white mb-4">How MoonShill Works</h2>
						<p className="text-xl text-slate-300 max-w-3xl mx-auto">
							From setup to scaling - discover how our AI-powered engine transforms your Web3 marketing in four simple
							steps
						</p>
					</motion.div>

					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
						{howItWorks.map((step, index) => (
							<motion.div
								key={index}
								className="relative"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
							>
								<div className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6 h-full hover:border-primary/50 transition-colors">
									<div className="flex items-center justify-between mb-4">
										<span className="text-primary font-bold text-lg">{step.step}</span>
										<div className="p-2 sm:p-3 bg-primary/10 rounded-lg">
											<step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
										</div>
									</div>
									<h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{step.title}</h3>
									<p className="text-slate-300 text-sm sm:text-base">{step.description}</p>
								</div>
								{index < howItWorks.length - 1 && (
									<div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
										<ArrowRight className="w-6 h-6 text-slate-600" />
									</div>
								)}
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Use Cases Section */}
			<section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl font-bold text-white mb-4">Perfect for Every Web3 Campaign</h2>
						<p className="text-xl text-slate-300 max-w-3xl mx-auto">
							Whether you're launching a token, growing your community, or making market moves, MoonShill adapts to your
							specific needs
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
						{useCases.map((useCase, index) => (
							<motion.div
								key={index}
								className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-colors"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.02 }}
							>
								<div className="flex items-start space-x-4 mb-6">
									<div className="p-3 sm:p-4 bg-primary/10 rounded-xl flex-shrink-0">
										<useCase.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
									</div>
									<div className="flex-1 min-w-0">
										<h3 className="text-xl sm:text-2xl font-bold text-white mb-3">{useCase.title}</h3>
										<p className="text-slate-300 text-base sm:text-lg">{useCase.description}</p>
									</div>
								</div>
								<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
									{useCase.benefits.map((benefit, benefitIndex) => (
										<div key={benefitIndex} className="flex items-center space-x-2">
											<Check className="w-4 h-4 text-green-400 flex-shrink-0" />
											<span className="text-slate-300 text-sm">{benefit}</span>
										</div>
									))}
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Platforms Section */}
			<section id="platforms" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
				<div className="max-w-7xl mx-auto">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl font-bold text-white mb-4">Supported Platforms</h2>
						<p className="text-xl text-slate-300 max-w-3xl mx-auto">
							Currently supporting the top 3 platforms where crypto communities thrive, with more coming soon
						</p>
					</motion.div>

					{/* Supported Platforms */}
					<div className="mb-12">
						<h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">✅ Available Now</h3>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							{supportedPlatforms.map((platform, index) => (
								<motion.div
									key={index}
									className="bg-gradient-to-br from-primary/10 to-primary-light/5 border border-primary/30 rounded-xl p-6 sm:p-8 text-center shadow-lg"
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.1 }}
									whileHover={{ scale: 1.05 }}
								>
									<div className="text-5xl sm:text-6xl mb-4">{platform.icon}</div>
									<h3 className="text-white font-bold text-lg sm:text-xl mb-3">{platform.name}</h3>
									<div className="inline-flex items-center px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
										<div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
										<span className="text-green-400 text-sm font-semibold">Active</span>
									</div>
								</motion.div>
							))}
						</div>
					</div>

					{/* Coming Soon Platforms */}
					<div>
						<h3 className="text-xl sm:text-2xl font-bold text-white mb-6 text-center">🔜 Coming Soon</h3>
						<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4">
							{comingSoonPlatforms.map((platform, index) => (
								<motion.div
									key={index}
									className="bg-slate-800/50 border border-slate-700 rounded-xl p-4 sm:p-6 text-center hover:border-slate-600 transition-colors relative"
									initial={{ opacity: 0, scale: 0.9 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true }}
									transition={{ delay: index * 0.05 }}
									whileHover={{ scale: 1.05 }}
								>
									<div className="text-3xl sm:text-4xl mb-3 opacity-60">{platform.icon}</div>
									<h3 className="text-slate-300 font-semibold mb-1 text-sm sm:text-base">{platform.name}</h3>
									<div className="inline-flex items-center px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded-full">
										<Clock className="w-3 h-3 text-orange-400 mr-1" />
										<span className="text-orange-400 text-xs font-semibold">Soon</span>
									</div>
								</motion.div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl font-bold text-white mb-4">What Early Users Are Saying</h2>
						<p className="text-xl text-slate-300">Real feedback from our beta community</p>
					</div>

					<div className="max-w-4xl mx-auto">
						<div className="relative bg-slate-800/50 border border-slate-700 rounded-2xl p-8 sm:p-12 text-center overflow-hidden">
							{/* Background Pattern */}
							<div className="absolute inset-0 opacity-5">
								<div className="absolute top-4 left-4 text-6xl text-primary">"</div>
								<div className="absolute bottom-4 right-4 text-6xl text-primary rotate-180">"</div>
							</div>

							{/* Stars */}
							<div className="flex justify-center space-x-1 mb-6">
								{[...Array(5)].map((_, i) => (
									<Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
								))}
							</div>

							{/* Testimonial Content */}
							<div className="relative z-10">
								<p className="text-slate-300 text-lg sm:text-xl leading-relaxed mb-8 italic min-h-[4rem] flex items-center justify-center">
									"{testimonials[activeTestimonial].content}"
								</p>

								{/* Anonymous Attribution */}
								<div className="flex items-center justify-center space-x-3">
									<div className="w-12 h-12 bg-gradient-to-br from-primary to-primary-light rounded-full flex items-center justify-center text-white font-bold">
										<Users className="w-6 h-6" />
									</div>
									<div>
										<div className="text-white font-semibold">Beta User</div>
										<div className="text-slate-400 text-sm">Web3 Community</div>
									</div>
								</div>
							</div>

							{/* Pagination Dots */}
							<div className="flex justify-center space-x-2 mt-8">
								{testimonials.map((_, index) => (
									<button
										key={index}
										onClick={() => setActiveTestimonial(index)}
										className={`w-2 h-2 rounded-full transition-all ${
											activeTestimonial === index ? "bg-primary w-8" : "bg-slate-600 hover:bg-slate-500"
										}`}
									/>
								))}
							</div>
						</div>

						{/* Auto-scroll indicator */}
						<div className="text-center mt-6">
							<p className="text-slate-500 text-sm">
								<Clock className="w-4 h-4 inline mr-1" />
								Auto-rotating every 4 seconds
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Waitlist CTA Section */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-primary-light/20">
				<div className="max-w-4xl mx-auto text-center">
					<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
						<h2 className="text-4xl font-bold text-white mb-6">Ready to Moon Your Community? 🌙</h2>
						<p className="text-xl text-slate-300 mb-8">
							Join the waitlist to be among the first to access MoonShill when we launch. Early users get exclusive
							benefits and lifetime discounts.
						</p>

						<form onSubmit={handleWaitlistSignup} className="max-w-lg mx-auto mb-8 px-4">
							<div className="flex flex-col md:flex-row gap-3">
								<input
									type="email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
									placeholder="Enter your email"
									className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-primary min-w-0"
									required
								/>
								<button
									type="submit"
									className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center whitespace-nowrap transition-colors"
								>
									<Mail className="w-5 h-5 mr-2 flex-shrink-0" />
									<span>Join Waitlist</span>
								</button>
							</div>
						</form>

						<div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
							<motion.button
								className="border border-slate-600 text-slate-300 hover:text-white hover:border-slate-500 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold flex items-center justify-center"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<MessageCircle className="w-5 h-5 mr-2" />
								Join Discord Community
							</motion.button>
						</div>
					</motion.div>
				</div>
			</section>

			{/* Footer */}
			<footer className="bg-slate-900 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
						<div className="col-span-1 md:col-span-2">
							<div className="flex items-center space-x-2 mb-4">
								<div className="w-8 h-8 bg-gradient-to-r from-primary to-primary-light rounded-lg flex items-center justify-center">
									<Rocket className="w-5 h-5 text-white" />
								</div>
								<span className="text-xl font-bold text-white">MoonShill</span>
							</div>
							<p className="text-slate-400 max-w-md mb-4 text-sm sm:text-base">
								The most advanced AI-powered multi-platform shilling engine for Web3 communities. Amplify your voice
								across all major platforms automatically.
							</p>
							<p className="text-slate-500 text-sm">Coming Soon - Join the waitlist for early access</p>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Product</h4>
							<ul className="space-y-2 text-slate-400 text-sm">
								<li>
									<a href="#features" className="hover:text-white transition-colors">
										Features
									</a>
								</li>
								<li>
									<a href="#how-it-works" className="hover:text-white transition-colors">
										How It Works
									</a>
								</li>
								<li>
									<a href="#use-cases" className="hover:text-white transition-colors">
										Use Cases
									</a>
								</li>
								<li>
									<a href="#platforms" className="hover:text-white transition-colors">
										Platforms
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h4 className="text-white font-semibold mb-4">Community</h4>
							<ul className="space-y-2 text-slate-400 text-sm">
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Discord
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Twitter
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Telegram
									</a>
								</li>
								<li>
									<a href="#" className="hover:text-white transition-colors">
										Documentation
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
						<p>&copy; {new Date().getFullYear()} MoonShill. All rights reserved. | Coming Soon</p>
					</div>
				</div>
			</footer>
		</div>
	);
}

export default App;
