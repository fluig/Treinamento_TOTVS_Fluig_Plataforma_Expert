<#import "/wcm.ftl" as wcm/>
<@wcm.header authenticated="true"/>
<!-- WCM Wrapper content -->
<div class="wcm-wrapper-content">

    <@wcm.menu />

    <!-- Wrapper -->
    <div class="wcm-all-content fluig-style-guide">
        <div id="wcm-content" class="clearfix wcm-background">

            <!-- Your content here -->
			<div class="col-md-6">
				<div class="editable-slot slotfull layout-1-1" id="slotContainer001">
				    <@wcm.renderSlot id="Slot001" decorator="false" editableSlot="true" />
				</div>
			</div>	
			
            <@wcm.footer layoutuserlabel="wcm.layoutdefault.user" />
        </div>
    </div>
</div>