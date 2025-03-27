 <div class="grid-container">
  <div class="grid-system">
    <!-- Full width column -->
    <div class="grid-col col-span-12 h-20 bg-blue-100">Full width</div>
    
    
    <!-- 3 equal columns -->
    <div class="grid-col col-span-4 h-20 bg-red-100">3 cols</div>
    <div class="grid-col col-span-4 h-20 bg-red-100">3 cols</div>
    <div class="grid-col col-span-4 h-20 bg-red-100">3 cols</div>
    
	<!-- 4 equal columns -->
    <div class="grid-col col-span-3 h-20 bg-red-100">4 cols</div>
    <div class="grid-col col-span-3 h-20 bg-red-100">4 cols</div>
    <div class="grid-col col-span-3 h-20 bg-red-100">4 cols</div>
    <div class="grid-col col-span-3 h-20 bg-red-100">4 cols</div>
	
	<!-- 6 equal columns -->
    <div class="grid-col col-span-2 h-20 bg-red-100">2</div>
    <div class="grid-col col-span-2 h-20 bg-red-100">2</div>
    <div class="grid-col col-span-2 h-20 bg-red-100">2</div>
    <div class="grid-col col-span-2 h-20 bg-red-100">2</div>
    <div class="grid-col col-span-2 h-20 bg-red-100">2</div>
    <div class="grid-col col-span-2 h-20 bg-red-100">2</div>
    <!-- 8+4 split -->
    <div class="grid-col col-span-8 h-20 bg-green-100">8 cols</div>
    <div class="grid-col col-span-4 h-20 bg-green-100">4 cols</div>
	

  </div>
</div>

<div>
	<div class="grid-container">
		<!-- Header Section -->
		<header class="space-y-4">
			<h1 class="text-4xl font-bold text-gray-900">Design System Grid</h1>
			<p class="text-lg text-gray-600">12-column layout system for consistent interface design</p>
		</header>

		<!-- Specifications Grid -->
		<section class="space-y-8">
			<h2 class="text-2xl font-semibold text-gray-900">Core Specifications</h2>
			<div class="grid grid-cols-12 gap-[32px]">
				<div class="col-span-3 p-4 bg-gray-200">
					<dt class="text-sm text-gray-500 pb-2">Max Width</dt>
					<dd class="text-2xl font-semibold">1120px</dd>
				</div>
				<div class="col-span-3 p-4 bg-gray-200">
					<dt class="text-sm text-gray-500 pb-2">Columns</dt>
					<dd class="text-2xl font-semibold">12</dd>
				</div>
				<div class="col-span-3 p-4 bg-gray-200">
					<dt class="text-sm text-gray-500 pb-4">Gutter</dt>
					<dd class="text-2xl font-semibold">32px</dd>
				</div>
				<div class="col-span-3 p-4 bg-gray-200">
					<dt class="text-sm text-gray-500 pb-2">Column Width</dt>
					<dd class="text-2xl font-semibold">64px</dd>
				</div>
			</div>
		</section>

		<!-- Base Grid Visualization -->
		<section class="space-y-8">
			<h2 class="text-2xl font-semibold text-gray-900">12-Column Grid</h2>
			<div
				class="grid grid-cols-12 gap-[32px] bg-gray-50 p-8"
				style="background-size: calc((100% - 11 * 32px) / 12) 100%; background-image: repeating-linear-gradient(to right, rgba(0,100,255,0.1), rgba(0,100,255,0.1) 64px, transparent 64px, transparent calc(64px + 32px));"
			>
				{#each Array(12) as _, i}
					<div
						class="h-20 bg-blue-100/50 flex items-center justify-center text-blue-800 font-medium"
						style="width: 64px;"
					>
						Col {i + 1}
					</div>
				{/each}
			</div>
		</section>

		<!-- Layout Examples -->
		<section class="space-y-8">
			<h2 class="text-2xl font-semibold text-gray-900">Common Layouts</h2>

			<!-- Full Width -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium text-gray-700">Full-width (12 columns)</h3>
				<div class="grid grid-cols-12 gap-[32px]">
					<div class="col-span-12 h-20 bg-green-100/50 flex items-center justify-center">
						12 Columns
					</div>
				</div>
			</div>

			<!-- Two Column -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium text-gray-700">Two Column (8 + 4)</h3>
				<div class="grid grid-cols-12 gap-[32px]">
					<div class="col-span-8 h-20 bg-green-100/50 flex items-center justify-center">
						8 Columns
					</div>
					<div class="col-span-4 h-20 bg-green-100/50 flex items-center justify-center">
						4 Columns
					</div>
				</div>
			</div>

			<!-- Three Column -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium text-gray-700">Three Column (4 + 4 + 4)</h3>
				<div class="grid grid-cols-12 gap-[32px]">
					{#each Array(3) as _}
						<div class="col-span-4 h-20 bg-green-100/50 flex items-center justify-center">
							4 Columns
						</div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Responsive Behavior -->
		<section class="space-y-8">
			<h2 class="text-2xl font-semibold text-gray-900">Responsive Grid</h2>

			<!-- Desktop -->
			<div class="space-y-4">
				<h3 class="text-lg font-medium text-gray-700">Desktop (≥1024px)</h3>
				<div class="grid grid-cols-12 gap-[32px] bg-gray-50 p-4">
					{#each Array(12) as _}
						<div class="h-12 bg-purple-100/50" style="width: 64px;"></div>
					{/each}
				</div>
			</div>

			<!-- Tablet -->
			<div class="space-y-4 lg:hidden">
				<h3 class="text-lg font-medium text-gray-700">Tablet (768px-1023px)</h3>
				<div class="grid grid-cols-8 gap-6 bg-gray-50 p-4">
					{#each Array(8) as _}
						<div class="h-12 bg-purple-100/50"></div>
					{/each}
				</div>
			</div>

			<!-- Mobile -->
			<div class="space-y-4 md:hidden">
				<h3 class="text-lg font-medium text-gray-700">Mobile (768px)</h3>
				<div class="grid grid-cols-4 gap-4 bg-gray-50 p-4">
					{#each Array(4) as _}
						<div class="h-12 bg-purple-100/50"></div>
					{/each}
				</div>
			</div>
		</section>

		<!-- Best Practices -->
		<section class="prose max-w-none">
			<h2 class="text-2xl font-semibold text-gray-900 mb-4">Implementation Guidelines</h2>
			<ul class="space-y-2 text-gray-700">
				<li>✓ Always use the 1120px container as the main content wrapper</li>
				<li>✓ Maintain 32px gutters between all grid columns</li>
				<li>✓ Align components to the 64px column widths for visual consistency</li>
				<li>✓ Use responsive modifiers (md:, lg:) for breakpoint-specific layouts</li>
				<li>✗ Avoid fixed widths that don't align with the 64px column increments</li>
			</ul>
		</section>
	</div>
</div>
