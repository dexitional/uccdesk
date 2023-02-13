[#-------------- INCLUDE AND ASSIGN PART --------------]
[#if content.size == 'default']
  [#assign size = def.parameters.size]
[#else]
  [#assign size = content.size]
[/#if]

[#-- positioning --]
[#if content.positioning == 'default']
  [#assign positioning = def.parameters.positioning]
[#else]
  [#assign positioning = content.positioning]
[/#if]

[#if positioning == 'inline']
  [#assign style = 'a2a_default_style']
  [#assign floating = '']

[#elseif positioning =='float-bottom']
  [#assign style = 'a2a_default_style']
  [#assign floating = 'a2a_floating_style floating_bottom']

[#elseif positioning =='float-left']
  [#assign style = 'a2a_vertical_style']
  [#assign floating = 'a2a_floating_style floating_left']

[#elseif positioning =='float-right']
  [#assign style = 'a2a_vertical_style']
  [#assign floating = 'a2a_floating_style floating_right']

[/#if]

[#assign services = def.parameters.services![]]

[#-- Must use inline css instead of assigning classes to handle the icons in the dynamicly created popup box.--]

<!-- socialSharing BEGIN -->
[#if !(def.parameters.rounded)]
<style>
  .a2a_svg, .a2a_count {
    border-radius: 0 !important;
  }
  .a2a_menu, .a2a_menu_find_container {
    border-radius: 0 !important;
  }
</style>
[/#if]

<div class="socialSharing a2a_kit a2a_kit_size_${size} ${floating} ${style} social-sharing" style="${additionalFloatingStyles!}">
<a class="a2a_dd" href="https://www.addtoany.com/share_save"></a>
[#list services as service]
  [#if service.selected??]
  <a class="a2a_button_${service.name}"></a>
  [/#if]
[/#list]
</div>
<!-- socialSharing END -->
